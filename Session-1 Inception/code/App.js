/**   Let's see how we can make nested tags in React
 * <div id="parent">
 *      <div id="child1">
 *          <h1> I am an h1 tag </h1>
 *          <h2> I am an h2 tag </h2>
 *     </div>
 *     <div id="child2">
 *          <h1> I am an h1 tag </h1>
 *          <h2> I am an h2 tag </h2>
 *     </div>
 * </div>
 */

// React.createElement returns an object which is then converted into HTML. The browser understands HTML.
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

console.log(heading); //returns a Javascript object (and not an HTML element), see below
/** {
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "id": "heading",
        "children": "Hello world from React"
    },
    "_owner": null,
    "_store": {}
}

 */

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); //render method converts Javascript object to HTML tag

root.render(parent);
