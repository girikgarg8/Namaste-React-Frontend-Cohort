Polyfill:  Polfyfill means replacing code with the code that browser understands
  eg. if older version of JS doesn't understand map() function, or maybe an old version of browser doesn't understand promises , babel may write own custom implementation of map() so that code is able to execute

Babel performs the task of generating the polyfill, for any newer functions of JS, whose implementation is not understood by browser.

We can specify the script for start by specifiying the script in the package.json file.

npm run (script name) is equivalent to calling npx (script name).

Babel doesn't automatically remove the console log's from the React app, in order to remove console log's, we need to setup a plugin called babel-plugin-transform-remove-console.

After installing the babel-plugin-transform-remove-console, we also need to configure it. Just installing a library in the code doesn't mean, it will function.

`Important point: Whenever a tag has multiple children, we always need to use keys for the children.`

Eg. if the tag structure is something like: 

`<div> <h1> </h1> <h1> </h1> </div>` (Here the div tag has h1 and h2 tags as children, so I should specify the keys for each of the two tags)

Why? Whenever React is updating the DOM, if we naively insert any other list item (let's say another h1 or h2 tag), then React gives bad performance because it has to spend a lot of time in figuring out the changes in the DOM tree i.e. the reconciliation algorithm's performance is not good if we don't use keys for the children, during re-render.

But if I use keys for the children, then the performance of the reconciliation algorithm is much better, and it takes lesser time to re-render the component.

SO, we'll pass the key as props to the children.

See this link: [Keys for children](https://legacy.reactjs.org/docs/reconciliation.html#recursing-on-children)


React.createElement gives us an object (How can we say that React.createElement is giving us an object? Try to console log the object returned by React.createElement,we can clearly see it is a object). This object is then mounted on the HTML DOM Tree.

So, the flow is `React.createElement gets converted to -> Javascript object gets converted to -> A node on the DOM Tree `.

`What is JSX and what is the need of JSX?` 

Let's say, I have a complex structure, which I need to code in React, maybe something like:

`<div><ul><li> Apple </li><li> Orange </li></ul></div>`

If I code this only using React.createElement, it will be a huge nested code, which is very difficult to write. So, this is the reason why JSX was created. JSX is a syntatic sugar over React.createElement.

JSX's full form is Javascript XML. (Javascript Extensible Markup Language)

JSX has HTML like syntax, but there are some minor changes in the syntax, for example, the syntax tab-index of HTML is replaced by tabIndex (camelcasing syntax in JSX), and the syntax class of HTML is replaced by className (in JSX).

The core philosophy behind React was to modify the HTML using Javascript in an efficient manner. (Earlier, before React, we used to update HTML using JS using document.getElementById and document.innerHTML etc, but React makes our code even more simpler and elegant.)


Surprising thing: In my App.js file, if I add a line of code like `const newHeading= <h1> Hi, hello! </h1>`, App.js gives no error!! Whereas if I try to write the same line of code somewhere else, outside of this React app, like in browser or any other JS file, it gives a syntax error!!

Q: `What is a transpiler, by the way? Interesting question...`

A: `A source-to-source translator, source-to-source compiler (S2S compiler), transcompiler, or transpiler is a type of translator that takes the source code of a program written in a programming language as its input and produces an equivalent source code in the same or a different programming language. Unlike the general compiler whose work is to convert a high-level programming language to a machine language that is binary, the source to source compiler converts one source code from one programming language to another programming language which is at the same level of compilation from machine language. For example, while the traditional compiler may convert C to assembly or Java to bytecode, the source to source compiler may convert one scripting language to another such as Javascript to Python, or C++ to Java. `


`What exactly is happening?` 

A.  The React app is able to understand the JSX because of the superpowers of Babel. `Babel acts as a transpiler and converts the JSX code into React.createElement, which is then converted into Javascript object and which is then mounted on the DOM tree. (As discussed before)

Explore this link to see how Babel transpilers, transpiles (or source to source converts JSX code into React code) [BabelJS Transpiler in action](http://www.babeljs.io)

Multiple lines JSX: In case, the JSX code is multiline, we need to add parantheses around the JSX code. (Why: So that the Javascript doesn't insert semicolons at the end, and break the JSX code that we have written) Visit this link: [Why multiline JSX requires parantheses](https://discuss.codecademy.com/t/why-do-we-need-parentheses-around-multi-line-jsx-expressions/392789) 


`Quiz question: Is JSX HTML inside Javascript?: 85% people said yes, but this is WRONG! JSX is just HTML like syntax, it is not HTML inside Javascript! `


`Another quiz question: How many package-lock.json files are present in the React App?: Most people answer 1, but it is not the right answer!! There's another package-lock.json file present in the node_modules folder too. `

Now the question is: What is the purpose of having the package-lock.json file in the node_modules folder? In order to avoid processing the node_modules folder repeatedly, npm uses a "hidden" lockfile present in node_modules/.package-lock.json. This contains information about the tree, and is used in lieu of reading the entire node_modules hierarchy provided some conditions are met. Explore this article: [Package-json in node_modules](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json#hidden-lockfiles)


Babel comes as a dependency with Parcel, so it is not present inside the package.json file.

==> From now onwards, we'll not be using React.createElement, we'll instead be using JSX. But knowing about React.createElement is necessary for in-depth understanding of React.

`React Components`

Everything is a component in React. For eg, let's visit flipkart.com, then the navbar, header, content, login button, carousel etc are components.

There are two types of components in React:

* Functional components (This is the newer way of writing React code, we'll be doing this for the most time in the course)

* Class based components (This is the older way of writing React, we'll cover this, but it's more important for legacy React code and interviews)

`What is a functional component in React?`

A functional component is a normal Javascript function, which returns either a React element or JSX or another component. (Higher order component)

So, `const Heading=()=>{ return React.createElement("h1",{},"Hello, there!!")}` and `const heading2=()=> return <h1> Hello from JSX! </h1>` are both examples of valid functional components in React.

One important point, about implicit return in arrow functions in Javascript. An arrow function in Javascript, will implicitly return a value, provided two conditions are met:

1) The function body should be a single line statement in Javascript. 

2) There should not be any block declaration, for example, the declaration of an object like ()=>{property:"hi"} would not return the object, because JS will interpret the curly braces of the object as a block. If at all, we want to return an object, it should be within parantheses, like ({status:200}).

For code examples, and more details, see these pages: [Stackoverflow page on implicit return ](https://stackoverflow.com/questions/28889450/when-should-i-use-a-return-statement-in-es6-arrow-functions) [Medium Article on implicit return ](https://medium.com/@bunlong/arrow-functions-return-rules-in-javascript-b63ed5f25994)

The property of implicit return is used inside React, if the JSX we are returning is single line, then we can make use of implicit return, something like:

`const Heading=()=> <h1> Hello, from implicit return in JSX </h1>` is a valid React syntax because the JSX would be returned implicitly from the component.

Also, some React developers, omit the return keyword from the React functional component altogether, it is also valid syntax in React.

For example, the following functional component is valid in React:

`const HeaderComponent=()=>{
  ( 
    <div> <h1> Namaste React </h1> </div>
  )
}` is perfectly valid React syntax.

When I need to render a React element, I use the syntax like `root.render(heading)`, but when I need to render a functional component inside the root, I use the syntax like `root.render(<Heading/>)` (Basically,I write the functional component in the form of a self-closing tag)

`It is a convention (not manadatory) to write the name of the component, starting with capital letters`

Now, what if I want to use another component inside another React component, or what if I want to use a React element inside a functional component?

Let's answer these questions:

Answer to Q1: To do this, I need to use the component as a tag. For example, in order to use the Title component inside the HeaderComponent, I can use the syntax like:


`const HeaderComponent=()=>{
    return (
        <div>
        <Title>
        <h1> Hello </h1>
        </Title>
        </div>
    )
}`


Answer to Q2: If I want to use a React element inside a component, I can do it with the help of using curly braces,for example, if I want to use the Title React element inside the header component, I can use it with the help of the syntax as below:

`
  const HeaderComponent=()=>{
    (
      <Title>
      <h1> Hello, from Header component!!! </h1>
      {Title}
    )
  }
`
So, in order to use the React component, I can use curly braces {}, in fact I can use any JS expresssion inside these curly braces. Like we can do string interpolation,console.log (eveything that JS can do) inside the {} braces.


`
  const HeaderComponent=()=>{
    (
      <Title>
      <h1> Hello, from Header component!!! </h1>
      {Footer()}
    )
  }
` 

In this code, assuming Footer is a functional component, it is a perfectly valid JS syntax! Because, the Footer functional component, would return JSX, and this JSX would be converted into browser compatiable Javascript by Babel, this Javascript code can then be executed inside the curly braces.

`const data=...some malicious code`

If I have an API that has some malicious code inside it, for example, let's call it data, and if it is executed inside the React component like {data}, then malicious code gets executed, which could cause a lot of havoc like the hacker can get access to the cookies, IP, location etc, this is known as cross site scripting. But JSX does something called sanitisation, it makes sure that the code it is going to execute is secure.

`Another important jargon which is important for interviews: component composition: means using a React component inside another React component, just like I used a Title component inside the Header component. It's just a fancy name, for something very common.`

The following is an example of component composition, where I am using the Title component inside the Header component:

`const HeaderComponent=()=>{
  return (
    <div>
    <Title>
    <h1> Hello, I am the header component!! </h1>
    </div>
  )
}`
