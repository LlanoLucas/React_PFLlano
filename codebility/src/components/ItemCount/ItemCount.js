import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="mt-2">Set Quantity</p>
      <div className="flex font-semibold items-center justify-center py-3 gap-3">
        <span
          className="px-2 cursor-pointer border border-black rounded select-none"
          onClick={decrement}
        >
          -
        </span>
        <span>{quantity}</span>
        <span
          className="px-2 cursor-pointer border border-black rounded select-none"
          onClick={increment}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default ItemCount;
