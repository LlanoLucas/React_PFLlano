import Swal from "sweetalert2";
import { useContext, useState, useEffect } from "react";
import { db } from "../../config/firebase";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../../context/CartContext";
import { collection, writeBatch } from "firebase/firestore";
import {
  Timestamp,
  getDocs,
  query,
  where,
  documentId,
  addDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, totalAmount, clearCart, totalQuantity } =
    useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: totalAmount(),
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productosRef = collection(db, "porductos");
      const productosAddedFromFirestore = await getDocs(
        query(productosRef, where(documentId(), "in", ids))
      );
      const { docs } = productosAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productoAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productoAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("No available stock of the selected product");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading && orderId) {
      Swal.fire({
        title: "ORDER PLACED",
        text: `The ID of your order is: ${orderId}`,
        icon: "success",
        confirmButtonText: "Understood",
        confirmButtonColor: "#3b82f6",
      });
    } else if (loading) {
      Swal.fire({
        title: "Generating your order ID",
        text: "Wait while your ID is generating...",
        allowOutsideClick: false,
        confirmButtonColor: "#3b82f6",
      });
    }
  }, [loading, orderId]);

  if (totalQuantity > 0) {
    return (
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-center mb-5">CHECKOUT</h1>
        <CheckoutForm onConfirm={createOrder} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center mt-8 font-semibold">
        <h1 className="text-center text-4xl font-bold">
          You have nothing to buy...
        </h1>
        <Link
          to={"/"}
          className="mt-2 underline decoration-cyan-400 bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent text-2xl hover:scale-110 transition-all ease-in-out duration-300 hover:bg-gradient-to-tl"
        >
          See Products
        </Link>
      </div>
    );
  }
};

export default Checkout;
