import React, { useState } from "react";
import { NavLink } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between">
      <div className="">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex justify-around m-4 p-4">
          <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/grocery" end>
              Grocery
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" end>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
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
