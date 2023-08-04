const NavBar = () => {
  return (
    <nav className="flex bg-cyan-950 text-white px-8 py-4 justify-between align-middle items-center">
      <strong className="text-3xl cursor-pointer">CODEBILITY</strong>
      <ul className="flex text- gap-8 ease-linear duration-300">
        <li className="font-semibold hover:text-cyan-500 cursor-pointer transition-all ease-linear duration-200">
          Courses
        </li>
        <li className="font-semibold hover:text-cyan-500 cursor-pointer transition-all ease-linear duration-200">
          Benefits
        </li>
        <li className="font-semibold hover:text-cyan-500 cursor-pointer transition-all ease-linear duration-200">
          About
        </li>
        <li className="flex font-semibold cursor-pointer gap-2 hover:text-cyan-500 transition-all ease-linear duration-200">
          <span>0</span>
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 19"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
