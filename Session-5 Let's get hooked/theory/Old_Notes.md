Q. Why do we create a folder named src in the project structure?

A. It's not a compulsion from the React library to use the src folder. However, using src folder is a common industry practice to keep the project structure organised, and so that finding files becomes easier. So, we can move all the React code into the src folder for better project structure and modularity approach.

React file structure: Read it from the documentation. 

[React File structure](https://legacy.reactjs.org/docs/faq-structure.html)

There can be two broad ways (not the only two ways), tpo define file structure in React:

1) Group by file type: Group similar kinds of files together, for example all the components in one folder, all the mocks in one folder etc. This is what we'll be going ahead with, in the Namaste React course.

2) Grouping by feature, like for a header feature, the header.html, headr.css and header.js, header.test.js files should all be placed in the same folder.
 
 As the official documentation says, "If you’re just starting a project, don’t spend more than five minutes on choosing a file structure. Pick any of the above approaches (or come up with your own) and start writing code! You’ll likely want to rethink it anyway after you’ve written some real code.", so don't fret much about it xD.

There can be two types of imports in React, default import (export) and named import (export).

1. Default import (export): Only one component or function or class etc can be default exported from a Javascript file. Though one thing to note here is that, we can bundle different functions or classes into a single object, but only one entity as a whole can be returned. Let's consider an example, for better understanding. 

Let's say a component Header is being default exported from Header.Js file and imported in the App.js file.

In order to default import a component or class or function, we can use any name in the import statement in App.js, so I can import Girik from Header.js file, and I don't need to use curly braces to do the import.

2. Named import (export): The same function name or component etc has to be used in the import name. Again, let's consider the same example: Let's say a component Header is being named exported from Header.Js file and imported in the App.js file.

To import it, the import syntax would be import {HeaderComponent} from Header.js

Important point: The syntax import {HeaderComponent} from Header.js may look like destructuring an object, but it is not destructuring an object.

How can I say that the import {Title} from 'Header.js' is not destructuring an object? Let's prove this by contradiction:

Try the code below in App.js file :

```
import Obj from Header
Obj.Title or const {Title}=Obj
```

, these lines of code won't work, thus we prove that a named import is not object destructuring, though the syntax looks like it.

However, there is an alternative syntax, if we want to import eveeything from a component (however this is rarely used in practice, still should know): I can write syntax like

```
import * as Obj from Header.js
   const {Title}=Obj;
```

Important point: The above is a syntax to only get the named imports, we can't get default exports by following this syntax of global Object.

There's a debate in the React community, some people prefer to use .jsx extension for the components, so for example, instead of using the Header.js file, I can use the Header.jsx filename too. Using .jsx extension may break the code for some external libraries, but for most pruposes it will work. In this course, we'll go for .js convention, but .jsx can also be used.

 Config File: Good convention to use, we can keep all the hardcoded data like CDN links, API keys, App secrets etc. It can also be called constants.js

 Why should we use config.js file? 1) In order to avoid duplication of code 2) In order to make the code maintainable, suppose that the constants are updated, I need to make the changes only at one place


**Building the search bar functionality- Many important concepts will be discussed here**

I had some queries, so I asked it to ChatGPT. Let's see the transript of my chat with ChatGPT:

Me:

``` 
const Body = () => {
    return (
        <>
        <input type="text" placeholder="Search" value=""></input>
        <button> Submit</button>
        </>
    )
}
```

The input tag doesn't allow me to enter any text in the search bar if I use the value attribute, but I can enter text if I don't use the value attribute. Why so? Also, can I skip using the value attribute altogether

ChatGPT:

The value attribute in the <input> tag is used to set the initial value of the input field. When you provide a value to the value attribute, it becomes a controlled component in React. A controlled component means that the value of the input is controlled by React's state, and you need to update the state to update the value of the input.

In your code snippet, you have set the value attribute to an empty string: value="". This means that the input field will always have an empty value, and any text you type into it will be overwritten by the empty value.

If you want to make the input field editable, you need to use state to manage its value using the useState hook.

```
import React, { useState } from 'react';

const Body = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input type="text" placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button>Submit</button>
    </>
  );
};

export default Body;
```

In this example, we are using the useState hook to create a state variable called searchValue and a corresponding setter function setSearchValue. We bind the value attribute of the input field to searchValue and the onChange event to the handleInputChange function, which updates the state value whenever the user types into the input field.

Regarding skipping the value attribute altogether, you can certainly do that if you don't need to control the input's value or access it from your component's logic. In that case, you can remove the value attribute from the <input> tag, and it will behave as a regular HTML input field.

**Phew! That was a really good question, and I learnt many new things like React State,Controlled component and Synthetic evenets etc, let's explore about them**

Go through these documentations to learn more! :

[React State] (https://www.w3schools.com/react/react_state.asp)

[Controlled and uncontrolled components in React](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/)

Some key points from these documentations: 

`What are events?`: Events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.

`Event listeners`: Event Listener in JavaScript is a procedure or method executed when any event occurs like a click event.

`React State`: React components has a built-in state object. The state object is where we store the key-value pairs that belong to the component. So, if you seee in the bigger picture, there are two objects associated with a component, that is the `props` and `state` object.

`Controlled Component:` The name itself suggests, it is being "controlled" by someone. Controlled Components are those components which are controlled by React State, and cannot be manipulated by the DOM (Document Object Model)

`Uncontrolled Component`: Uncontrolled components are the components which are not controlled by the React State, but are instead controlled by the DOM (Document Object Model). 

`Synthetic Events`: The name itself suggests, it is "synthetic" (which means it is artificial or not natural). So, what exactly is a synthetic event? Before that, let's understand how an event is handled in native browser?

**Important** When an event is triggered in a web page, **the browser creates an event object and dispatches it to any event listeners that have been registered for that event**. However, different browsers may create slightly different event objects, and the properties and methods of these objects may not be consistent across different devices. This can make it difficult to write cross-browser compatible code for handling events (TLDR: Different browsers can have different event objects, so this is the problem).

Solution to this problem: To address this problem, libraries like React create synthetic events that provide a consistent interface for working with events across different browsers and devices. When a synthetic event is triggered, the library creates an event object that has a standard set of properties and methods that can be used to handle the event. The synthetic event is then passed to any event listeners that have been registered for the event.

For example, in React, when a user clicks on a button, a synthetic click event is created and passed to the event listener function. The event listener function can then use the standard set of properties and methods provided by the synthetic event to handle the click event in a consistent way.

Overall, synthetic events provide a way to simplify event handling and provide a consistent interface for working with events across different browsers and devices. They are a useful tool for building robust and cross-browser compatible web applications. (TLDR: Due to synthetic events, we can develop React App which works on different browsers, a consistent event object is dispatched to the event listener, irrespective of the different browsers in which we may be running our React App on! )

**Coming to a single liner definition of synethetic, The synthetic event is a wrapper of the browser's native event, which is supported cross-browser.**

**Important** :React uses one way data binding, while Angular uses two way data binding.  This means that, the data can only flow from Parent component to Child component, it also means that teh data flow can only be one way, either from code to the UI or vice versa.

Code example of one way data binding in React: **Important for enhancing the understanding of one way and two way data binding**

If I have the following code in React

```
const searchText="McDonalds"

<input type="text" value={searchText}/>
```
and if I update the searchText from the UI, then the variable searchText in the React Code won't get updated. However, in Angular (which supports two way data binding), the value of variable searchText gets updated in the code, if it is changed from the UI.

**Important** Whenever there is an HTML tag which cannot have any children tag like an input tag, we should always use self closing tags, otherwise React will throw an error.

Using a var/let/const variable for the searchText variable will not suffice, because it is not a state variable, so it's value is not being tracked by the React state.

**One query that I always had from the very beginning, where does e.target.value come from?**

The e.target.value refers to the value property of the target element that triggered an event. This concept is provided by the JavaScript event system, not specifically by React or HTML.

**Important: Concept of state variables: What are they, why do we need them**

State variables are those variables whose state (value) is tracked by React. We need state variables because normal Javascript variables cannot be tracked by React.

**What are hooks in React?** : Hooks are nothing but normal Javascript functions, people have overhyped it actually. Just like a functional component is nothing but a normal Javascript function that returns JSX or React.createElement. These hooks are written by Facebook developers and every hook has some special function or task to perform.

**What is useState in React?** 

useState is a hook in React, which is used to define a state variable in React. The useState hook returns an array as output, the first array element is the state variable, and the second one is a function to update the state variable. The parameter passed inside useState is used to set the initisl value of state variable.