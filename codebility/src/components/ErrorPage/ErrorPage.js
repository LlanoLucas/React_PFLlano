import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-bold text-4xl mt-12 mb-6">
        404 PAGE NOT FOUND
      </h1>
      <Link
        to={"/"}
        className="text-xl w-max justify-center border-2 border-black rounded-md px-2 py-1 bg-gradient-to-br from-cyan-500 to-blue-500 font-semibold hover:text-white hover:bg-gradient-to-r transition-all ease-in-out duration-300"
      >
        Home
      </Link>
    </div>
  );
};

export default Error404;
