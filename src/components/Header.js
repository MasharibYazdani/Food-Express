import { useContext, useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  //Subscribing to the store using Selector

  const cartItems = useSelector((store) => store.cart.items);

  const calculateTotalItmes = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.quantity;
    });

    return count;
  };

  return (
    <div className="flex justify-between  w-full bg-red-500 h-24 shadow-lg">
      <div className="w-24">
        <img className="p-1 ml-4 rounded-full" src={LOGO_LINK} />
      </div>

      <div className="text-center p-2 m-3 text-4xl font-bold rounded-lg">
        <h1 className=" font-serif text-green-200 italic ">
          <span className="text-5xl">F</span>
          <span>OOD</span> <span className="text-5xl">E</span>
          <span>XPRESS</span>
        </h1>
      </div>

      <div className="flex mr-4 max-md:flex-row">
        <ul className="flex items-center ">
          <li className="mx-3 text-white font-serif text-xl">
            <Link className="hover:text-gray-300" to="/">
              Home
            </Link>
          </li>
          <li className="mx-3 text-white font-serif text-xl">
            <Link className="hover:text-gray-300" to="/about">
              About
            </Link>
          </li>
          <li className="mx-3 text-white font-serif text-xl">
            <Link className="hover:text-gray-300" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="mx-3 mr-5 text-white font-serif text-xl">
            <Link className="hover:text-gray-300" to="/cart">
              <div className="flex justify-between">
                <div>
                  <img
                    className="w-8  rounded-md"
                    src="https://static.vecteezy.com/system/resources/previews/024/044/741/original/shopping-cart-logo-design-cart-icon-ecommerce-logo-vector.jpg"
                  />
                </div>

                <div className="ml-2">
                  <span>({calculateTotalItmes()})</span>
                </div>
              </div>
            </Link>
          </li>

          <li className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-md shadow-md">
            <button
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
