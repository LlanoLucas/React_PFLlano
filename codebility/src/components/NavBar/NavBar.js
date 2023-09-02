import { NavLink, Route } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="flex bg-gradient-to-r from-cyan-700 to-blue-900 text-white px-8 py-4 justify-between items-center">
      <NavLink to={"/"} className="text-3xl font-semibold cursor-pointer">
        CODEBILITY
      </NavLink>
      <ul className="flex items-center gap-8 ease-linear duration-300">
        <NavLink
          to={"/category/courses"}
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-semibold"
              : "font-semibold hover:text-cyan-400 cursor-pointer transition-all ease-linear duration-200"
          }
        >
          Courses
        </NavLink>
        <NavLink
          to={"category/books"}
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-semibold"
              : "font-semibold hover:text-cyan-400 cursor-pointer transition-all ease-linear duration-200"
          }
        >
          Books
        </NavLink>
        <NavLink
          to={"about"}
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-semibold"
              : "font-semibold hover:text-cyan-400 cursor-pointer transition-all ease-linear duration-200"
          }
        >
          About
        </NavLink>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
