import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutDetail = () => {
  const { cart, totalAmount, totalQuantity } = useContext(CartContext);

  return (
    <div className="flex flex-col mt-5 mb-8 w-full items-center">
      <p className="font-semibold text-2xl mb-4 underline">PURCHASE DETAIL</p>
      {cart.map((product) => (
        <CartItem
          img={product.img}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
      <div className="text-blue-500 font-semibold w-8/12 mt-2 text-end">
        <Link
          className="hover:text-blue-600 hover:underline transition duration-200"
          to="/cart"
        >
          EDIT ORDER
        </Link>
      </div>
      <p className="font-semibold text-2xl">
        TOTAL : ${parseFloat(totalAmount()).toFixed(2)}
      </p>
    </div>
  );
};

export default CheckoutDetail;
