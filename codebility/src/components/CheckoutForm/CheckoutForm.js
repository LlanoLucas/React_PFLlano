import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CheckoutDetail from "../CheckoutDetail/CheckoutDetail";

const CheckoutForm = ({ onConfirm, selectedProductos }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const { cart, clearCart } = useContext(CartContext);

  const handleConfirm = (event) => {
    event.preventDefault();

    if (email === confirmEmail) {
      const userData = {
        name,
        phone,
        email,
      };
      onConfirm(userData);
    } else {
      alert("EMAIL INCORRECTO");
    }
  };

  return (
    <div className="flex flex-col items-center text-xl">
      <form onSubmit={handleConfirm} className="flex flex-col gap-6 w-4/12">
        <p className="title is-5">
          <label className="flex gap-2 flex-col">
            <p className="text-sm rounded px-1.5 py-0.5 bg-blue-500 w-max text-white font-semibold">
              FULL NAME
            </p>
            <input
              placeholder="Name Lastname"
              type="text"
              value={name}
              required
              onChange={({ target }) => setName(target.value)}
              className="px-2 w-full border-b-2 py-0.5 border-blue-500 focus:outline-none  focus:scale-105 transition duration-300"
            />
          </label>
        </p>
        <p className="title is-5">
          <label className="flex gap-2 flex-col">
            <p className="text-sm rounded px-1.5 py-0.5 bg-blue-500 w-max text-white font-semibold">
              PHONE
            </p>
            <input
              placeholder="e.g. 1141852253"
              type="text"
              value={phone}
              required
              onChange={({ target }) => setPhone(target.value)}
              className="px-2 w-full border-b-2 py-0.5 border-blue-500 focus:outline-none  focus:scale-105 transition duration-300"
            />
          </label>
        </p>
        <p className="title is-5">
          <label className="flex gap-3 flex-col">
            <p className="text-sm rounded px-1.5 py-0.5 bg-blue-500 w-max text-white font-semibold">
              EMAIL
            </p>
            <input
              placeholder="example@example.com"
              type="email"
              value={email}
              required
              onChange={({ target }) => setEmail(target.value)}
              className="px-2 w-full border-b-2 py-0.5 border-blue-500 focus:outline-none  focus:scale-105 transition duration-300"
            />
          </label>
        </p>
        <p className="title is-5">
          <label className="flex gap-3 flex-col">
            <p className="text-sm rounded px-1.5 py-0.5 bg-blue-500 w-max text-white font-semibold">
              CONFIRM EMAIL
            </p>
            <input
              placeholder="example@example.com"
              type="email"
              value={confirmEmail}
              required
              onChange={({ target }) => setConfirmEmail(target.value)}
              className="px-2 w-full border-b-2 py-0.5 border-blue-500 focus:outline-none focus:scale-105 transition duration-300"
            />
          </label>
        </p>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="flex items-center justify-center w-full border-2 border-black bg-blue-500 rounded text-white py-0.5 font-semibold hover:scale-105 transition duration-300"
          >
            PLACE ORDER
          </button>
          <Link
            to="/"
            onClick={() => clearCart()}
            className="flex items-center justify-center w-full border-2 border-inset border-red-400 text-red-400 rounded py-0.5 font-semibold hover:bg-red-400 hover:text-white transition duration-300"
          >
            CANCEL ORDER
          </Link>
        </div>
      </form>
      <div className="w-full flex flex-col items-center m-0 text-center">
        <CheckoutDetail cart={cart} />
      </div>
    </div>
  );
};

export default CheckoutForm;
