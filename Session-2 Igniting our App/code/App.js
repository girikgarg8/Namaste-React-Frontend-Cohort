import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
      },
      [
        //array of objects
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child2",
      },
      [
        //array of objects
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
      ]
    ),
  ]
);

console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //render method converts Javascript object to HTML tag
