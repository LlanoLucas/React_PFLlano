import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      <h1 className="block font-bold text-4xl my-6 text-center">About us</h1>
      <p className="block text-center text-xl mb-6">
        We are a company that provides you the education you need to land your
        desired job or start your business.
      </p>
      <div className="flex justify-center">
        <Link
          className="text-xl w-max justify-center rounded-md px-2 py-1 bg-gradient-to-br from-cyan-500 to-blue-500 font-semibold hover:text-white hover:bg-gradient-to-r transition-all ease-in-out duration-300"
          to={"/"}
        >
          Explore
        </Link>
      </div>
    </main>
  );
};

export default About;
