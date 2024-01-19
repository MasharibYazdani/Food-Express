import { useContext, useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  // console.log("Header rendered");

  // useEffect(() => {
  //   console.log("UseEffect called");
  // }, [loginBtn]);

  return (
    <div className="flex justify-between m-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-24 rounded-md shadow-lg">
      <div className="w-24">
        <img className="p-1 ml-4 rounded-full" src={LOGO_LINK} />
      </div>

      <div className="flex mr-4">
        <ul className="flex items-center ">
          <li className="mx-3 text-white font-serif text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3 text-white font-serif text-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-3 text-white font-serif text-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-3 mr-5 text-white font-serif text-xl">Cart</li>

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

          <li className="mx-3 mr-5 font-serif text-xl font-bold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
