const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="flex-col w-3/12 rounded-md border-2 border-cyan-500">
      <div className="flex-col gap-4 items-center">
        <img
          className="w-full h-40 object-cover border-b border-cyan-500 rounded-t"
          src={img}
          alt="talita"
        />
      </div>
      <div className="px-3 py-2">
        <div>
          <h4 className="mb-3 font-semibold text-2xl">{name}</h4>
          <p>Price: ${price}</p>
          <p>Stock: {stock}</p>
        </div>
      </div>
      <footer>
        <button className="text-center w-full mb-3 bg-cyan-500 font-semibold mt-2 py-1 hover:text-white transition-all ease-in-out duration-300">
          See Details
        </button>
      </footer>
    </article>
  );
};

export default Item;
