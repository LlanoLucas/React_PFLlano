import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      <h1 className="block font-bold text-4xl my-6 text-center">ABOUT US</h1>
      <p className="block text-center text-xl mb-6">
        We are a company that provides you the education you need to land your
        desired job or start your business.
      </p>
      <div className="flex justify-center">
        <Link
          className="underline decoration-cyan-400 bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold text-2xl hover:scale-110 transition-all ease-in-out duration-300 hover:bg-gradient-to-tl"
          to={"/"}
        >
          Explore
        </Link>
      </div>
    </main>
  );
};

export default About;
