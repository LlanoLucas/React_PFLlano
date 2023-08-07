import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="flex bg-gradient-to-r from-cyan-700 to-blue-900 text-white px-8 py-4 justify-between items-center">
      <strong className="text-3xl cursor-pointer">CODEBILITY</strong>
      <ul className="flex items-center gap-8 ease-linear duration-300">
        <li className="font-semibold hover:text-cyan-400 cursor-pointer transition-all ease-linear duration-200">
          Courses
        </li>
        <li className="font-semibold hover:text-cyan-400 cursor-pointer transition-all ease-linear duration-200">
          Books
        </li>
        <li className="font-semibold hover:text-cyan-400 cursor-pointer transition-all ease-linear duration-200">
          About
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
