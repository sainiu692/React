import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render");
  console.log(btnNameReact);

  useEffect(() => {
    console.log("use effect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="app logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className="login"
          onClick={() => {
            btnNameReact === "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
            console.log(btnNameReact);
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
