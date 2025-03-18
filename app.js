import React from "react";
import ReactDOM from "react-dom/client";

// package.json is a configuartion for npm

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello World From React!" 
// );

//ReactElement(object)=>HTML(browser understands)

// console.log(heading) //object

const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Im in h1 tag"),
        React.createElement("h2",{},"Im in h2 tag")
        ]
    ),
    React.createElement("div",{id:"child2"}, 
        [React.createElement("h1",{},"Im in h1 tag"),
        React.createElement("h2",{},"Im in h2 tag")
        ]
    )]
  )
  console.log(parent)
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(parent);
  