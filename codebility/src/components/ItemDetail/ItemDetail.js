import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, price, stock, description }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
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
          className="text-white text-center block text-xl w-full mt-0 border-t-2 rounded-b border-black bg-gradient-to-br from-cyan-500 to-blue-500 font-semibold py-1"
        >
          <p className="hover:scale-105 transition-all duration-300">
            Proceed to Checkout
          </p>
        </Link>
      ) : (
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
      )}
    </article>
  );
};

export default ItemDetail;
