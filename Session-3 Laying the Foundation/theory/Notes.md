JSX is not a part of React. JSX and React are two separate things. They're often used together, but you can use them independently of each other.

Babel also does the job of generating poylfills, apart from acting as a transpiler to convert JSX code into Javascript code.

Multi-line JSX always has to go inside parantheses, something like:

```
(
    <h1 
        className="heading"> 
        Hello World 
    </h1>
)
```

Everything in React is a component.

A React functional component is nothing but a normal Javascript function that returns some piece of JSX or a React element. By React element, I mean the element returned by React.createElement API.

Component composition is using a component inside another component, like we are using Title component inside the Header component:

```
const HeadingComponent = () => {
  return (
    <div>
      <h1 className="heading"> Namaste React Heading Functional Component</h1>{" "}
      <Title />
    </div>
  );
};
```

We can put any valid JavaScript expression inside the curly braces in JSX.

JSX does sanitisation for us - it prevents a XSS (cross site scripting) attack so if we are executing a Javascript code inside JSX, we need not worry about executing malicious code. See this [link](https://legacy.reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks) for details.