Handling data in any application like React app or Angular app is the most critical part of any application.

Web application means an application which is made using a single page application using a library/framework like React/Angular etc, not a plain HTML page

There are two layers in React: Data layer and UI layer

UI layer is specified using the JSX

Diff algorithm compares the previous virtual DOM and new virtual DOM, then this difference between the two virtual DOM's is synced with the UI.

The whole UI layer is powered by data layer.

The data is passed in the form of states and props to UI.

Basic question: what is the difference between state and props? State is a local variable whose scope is just inside the component while props is used to pass data from one component to another component.

Hierarchy of passing the component: Applayout
-> (state=user)->

 <Body user={user} 
 -> <RestaurantCard user={user}/> 
 -> <h4> User </h4>

This is known as prop drilling.

How to pass data from child to parent? Firstly, there would be very less use cases where data needs to flow from child to parent component.

What are the ways to pass data from child to parent?

Firstly, we can use local storage, but it's not a good option

Secondly, we could use custom hooks, but using too many custom hooks messes up the code

Disadvantage of using prop drilling in the code:

1.  makes the code cluttered, if I need to pass data to 10th child then the Hierarchy is too big (passing props is okay upto 2-3 levels)
2.  due to a change in prop, the entire component re-renders, which leads to bad performance of the app

One way to deal with prop drilling is using Redux, which we'll use in next lecture

We implemented a accordion in the Instamart page

For making a collapsable accordion, one component't can't directlty change the state of another component, so I use Lifting the state up in React, means the state is shared by the parent of the components

So when to do the process of lifting the state up?. Many times, multiple components must reflect the same changing data. And if the data is not in sync between the "parent and children components" or "cousin components", it is recommended to lift the shared state up to the closest common ancestor.

Let's say child wants to access function x from parent component, so child cannot directly call function x from parent, so parent will pass function x as a prop to the child, and the child can then call function x() as and when required.

Profiler from React developer tools logs the entire session, and ity is useful while debugging a large scale application.

Flamegraph in Profiler shows actually what happened

Suppose I have a usecase that I want some data (say a Javascript object) all across the app, one solution is to drill thr prop everywhere, but this is a very bad approach

So whenever I want some data all across the app, one solution is to use local storage (but updating local storage is an expensive operation), so I need to maintaina central state inside the React app.

In case of React, React Context provides the central store, we can also use Redux

Question: Can we not use a global Javascript object which will be accessible everywhere inside the React app? The Disadvantage is that this variable wil not be tracked by React, so reconciliation process will not take place.

To use Context API, I just use a named import of createContext from "react"

In ordet ot use the variable from context, I use "useContext" inside the React app. ("use" for "useContext" and "create" for "createContext", easy peasy stuff)

State and props are tied to components, whereas Context is not specific to any component

Context is like useState for the entire application

How to use context API in case of class based components? I use ContextName.Consumer (like Usercontext.Consumer)

Using UserContext.Provider I can override the default value

React Router DOM is using context behind the scenes

userContext.displayName="UserContext" //this name will now be displayed in the react developer tools componenets section, so it makes it easier to debug things
