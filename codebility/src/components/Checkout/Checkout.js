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

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, totalAmount, clearCart } = useContext(CartContext);

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

  const redirectToInicio = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    if (!loading && orderId) {
      Swal.fire({
        title: "ORDER PLACED",
        text: `THE ID OF YOUR ORDER IS: ${orderId}`,
        icon: "success",
        confirmButtonText: "GO TO START",
        customClass: {
          confirmButton: "button is-success is-rounded",
        },
        onClose: () => {
          redirectToInicio();
        },
      });
    } else if (loading) {
      Swal.fire({
        title: "GENERATING ORDER ID",
        text: "WAIT WHILE YOUR ID IS GENERATING...",
        allowOutsideClick: false,
        customClass: {
          confirmButton: "button is-success is-rounded",
        },
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
    }
  }, [loading, orderId]);

  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold text-center mb-5">CHECKOUT</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
