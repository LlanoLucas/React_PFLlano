import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalAmount } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="flex flex-col w-full items-center mt-8 font-semibold">
        <h1 className="text-4xl font-bold">THE CART IS EMPTY</h1>
        <Link
          className="mt-2 underline decoration-cyan-400 bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent text-2xl hover:scale-110 transition-all ease-in-out duration-300 hover:bg-gradient-to-tl"
          to="/"
        >
          Products
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full mt-8 items-center flex flex-col gap-3">
      <h1 className="font-bold text-4xl mb-2">CART</h1>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3 className="font-bold text-3xl w-8/12 self-center text-end px-2">
        Total: ${parseFloat(totalAmount()).toFixed(2)}
      </h3>
      <div className="flex items-center gap-1 w-8/12 text-xl">
        <button
          className="text-red-500 min-w-max text-center border-2 p-2 rounded border-red-400 hover:text-white hover:bg-red-400 transition-all duration-300"
          onClick={() => clearCart()}
        >
          Clear Cart
        </button>
        <Link
          className="font-semibold w-full py-2 rounded text-center border-2 text-white border-black bg-blue-500  hover:bg-blue-600 transition-all duration-300"
          to="/checkout"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
