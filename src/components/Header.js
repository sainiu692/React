import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render");
  console.log(btnNameReact);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="app logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
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
