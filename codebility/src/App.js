import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import About from "./components/About/About";

function App() {
  return (
    <div className="App font-poppins">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Welcome!"} />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center">
                <h1 className="text-center font-bold text-4xl mt-12 mb-6">
                  404 PAGE NOT FOUND
                </h1>
                <Link
                  to={"/"}
                  className="text-xl w-max justify-center rounded-md px-2 py-1 bg-gradient-to-br from-cyan-500 to-blue-500 font-semibold hover:text-white hover:bg-gradient-to-r transition-all ease-in-out duration-300"
                >
                  Home
                </Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
