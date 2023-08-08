import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, price, stock, description }) => {
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
        <div className="border-b border-black pb-3">
          <h4 className="mb-3 font-semibold text-3xl">{name}</h4>
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
        <button className="text-center text-xl w-full rounded-b border-t-2 border-black bg-gradient-to-br from-cyan-400 to-blue-500 font-semibold mt-1 py-1 hover:text-white hover:bg-gradient-to-r transition-all ease-in-out duration-300">
          Add to Cart
        </button>
      </footer>
    </article>
  );
};

export default ItemDetail;
