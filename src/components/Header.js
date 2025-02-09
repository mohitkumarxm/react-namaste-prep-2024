import React, { useState } from "react";
import { NavLink } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-2xl shadow-amber-200">
      <div className="">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex justify-around m-4 p-4 items-center">
          <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/grocery" end>
              Grocery
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/about" end>
              About Us
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/cart">Cart ({cartItems.length})</NavLink>
          </li>
          <button
            className="login"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
