import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello world");

console.log(heading);

// JSX (transpiled before it reached JS engine by Babel- in our case Parcel already has installed Babel as a dependency)

// Very very important: JSX => React.createElement (returns a React element - JS Object) => HTML element (render)
const jsxHeading = (
  <h1 id="heading" className="head">
    Hello World from JSX
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * React components
 * Functional components - New way of writing React components
 * Class based components - Old way of writing React components
 */

const elem = <span> React Element </span>;
const title = (
  <div>
    <h1> Title React Element </h1> {elem}
  </div>
);
const Title = () => {
  return <h2> Hello, this is the title </h2>;
};

const name = "Girik";
const HeadingComponent = () => {
  return (
    <div>
      <h1 className="heading"> Namaste React Heading Functional Component</h1>{" "}
      <h2 className="heading"> Heading Second line </h2>
      {name}
      {100 + 200}
      {title}
      {Title()}
      <Title />
    </div>
  );
};

const HeadingComponent2 = () => (
  <h1> Hello Namaste React second functional component! </h1>
);

function HeadingComponent3() {
  return <h1> Hello, I am third heading component</h1>;
}
root.render(<HeadingComponent />);
