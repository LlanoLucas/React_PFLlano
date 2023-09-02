import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";

const CheckoutDetail = () => {
  const { cart, totalAmount } = useContext(CartContext);

  return (
    <div className="flex flex-col mt-8 mb-8 w-full items-center gap-3">
      <p className="font-semibold text-2xl">PURCHASE DETAIL</p>
      {cart.map((product) => (
        <CartItem
          img={product.img}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
      <p className="font-semibold text-2xl">
        TOTAL : ${parseFloat(totalAmount())}
      </p>
    </div>
  );
};

export default CheckoutDetail;
