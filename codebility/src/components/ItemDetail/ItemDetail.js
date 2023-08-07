import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, price, stock, description }) => {
  return (
    <article className="flex-col w-3/12 rounded-md border-2 border-cyan-500">
      <div className="flex-col gap-4 items-center">
        <img
          className="w-full h-44 object-cover border-b border-black rounded-t"
          src={img}
          alt="talita"
        />
      </div>
      <div className="px-3 py-2">
        <div>
          <h4 className="mb-3 font-semibold text-2xl">{name}</h4>
          <p className="mb-4 text">{description}</p>
          <p className="pl-2">Price: ${price}</p>
          <p className="pl-2">Stock: {stock}</p>
        </div>
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log(`cantidad agregada ${quantity}`)}
        />
      </div>
      <footer>
        <button className="text-center w-full mb-3 bg-cyan-500 font-semibold mt-1 py-1 hover:text-white transition-all ease-in-out duration-300">
          Add to Cart
        </button>
      </footer>
    </article>
  );
};

export default ItemDetail;
