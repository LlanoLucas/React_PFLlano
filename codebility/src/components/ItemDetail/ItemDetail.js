import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ name, img, price, stock, description }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
  };

  return (
    <article className="m-auto mt-12 flex-col w-4/12 rounded-md border-2 border-black">
      <div className="flex-col gap-4 items-center">
        <img
          className="w-full h-52 object-cover border-b-2 border-black rounded-t"
          src={img}
          alt="talita"
        />
      </div>
      <div className="px-3 text-lg pt-2">
        <div className="mb-3">
          <h4 className="mb-3 font-semibold text-3xl">{name}</h4>
          <p className="mb-4 text">{description}</p>
          <p className="pl-2">Price: ${price}</p>
          <p className="pl-2">Stock: {stock}</p>
        </div>
      </div>
      {quantityAdded > 0 ? (
        <Link
          to="/cart"
          className="text-center block text-xl w-full mt-0 border-t-2 rounded-b border-black bg-gradient-to-br from-cyan-400 to-blue-500 font-semibold py-1 hover:text-white hover:bg-gradient-to-r transition-all ease-in-out duration-300"
        >
          Proceed to Checkout
        </Link>
      ) : (
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
      )}
    </article>
  );
};

export default ItemDetail;
