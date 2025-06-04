import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent, { Header } from "./components/Header";
import Body from "./components/Body";

// HeaderComponent will reference the default export.

// Header will reference the named export.

// 💡 In this example, both HeaderComponent and Header point to the same thing,
//  since you're exporting the same function as both default and named. But they don’t have to be the same
//  — you could export something else as default or named if needed.

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
