import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="flex-col w-3/12 rounded-md border-2 border-black">
      <div className="flex-col gap-4 items-center">
        <img
          className="w-full h-40 object-cover border-b-2 border-black rounded-t"
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
      <footer className="mb-0 text-center border-t-2 text-white border-black w-full bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold mt-2 rounded-b py-1 transition-all ease-in-out duration-300">
        <Link
          className="block hover:scale-110 transition-all duration-300"
          to={`/item/${id}`}
        >
          See Details
        </Link>
      </footer>
    </article>
  );
};

export default Item;
