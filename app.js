import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, "This is the child div"),
//   React.createElement("h1", { id: "heading" }, "i am an h1 tag "),
//   React.createElement("h2", { id: "heading2" }, "i am an h2 tag"),
//]);
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { key: "1", id: "child" },
    "This is the child div"
  ),
  React.createElement("h1", { key: "2", id: "heading" }, "I am an h1  tag"),
  React.createElement("h2", { key: "3", id: "heading2" }, "I am an h2 tag"),
]);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
