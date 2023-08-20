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
      <p>Set Quantity</p>
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
      <footer className="w-full">
        <button
          className="text-center text-xl w-full rounded-b border-t-2 border-black bg-gradient-to-br from-cyan-400 to-blue-500 font-semibold mt-1 py-1 hover:text-white hover:bg-gradient-to-r transition-all ease-in-out duration-300"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Add to Cart
        </button>
      </footer>
    </div>
  );
};

export default ItemCount;
