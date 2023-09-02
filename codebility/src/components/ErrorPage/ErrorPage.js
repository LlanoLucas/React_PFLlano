import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center mt-8 font-semibold">
      <h1 className="text-center text-4xl font-bold">404 PAGE NOT FOUND</h1>
      <Link
        to={"/"}
        className="mt-2 underline decoration-cyan-400 bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent text-2xl hover:scale-110 transition-all ease-in-out duration-300 hover:bg-gradient-to-tl"
      >
        Home
      </Link>
    </div>
  );
};

export default Error404;
