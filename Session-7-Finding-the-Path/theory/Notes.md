Let's take a look at some of the best practices in React to use the `useState` hook: 

1. Never write the `useState` hook outside of the functional component, for two reasons:

    1.1 It will throw an error telling that `Invalid hook call. Hooks can only be called inside of the body of a function component.`

    1.2 Logically, it doesn't make sense to define the state variable outside of the functional component, since by definition, the state variable is a local variable which maintains information about the component, so it should be defined within the component.

2. Always try to write the `useState` in the beginning of the functional component, because it is a good coding practice and also React being Javascript, we want the variable declarations to happen before these variables are used.

3. Don't use the `useState` hook inside an if-else condition. Because the state variable might not be initialised if the state variable is initialised in an `if-else`, and it can lead to inconsistency in the code. Similarly, don't define the state variables in a function or a loop. (This is again to avoid any scoping problems). This is mentioned in the React documentation as well: [React documentation](https://legacy.reactjs.org/docs/hooks-rules.html)

**Let's now explore about Routing in React**

In order to setup routing, we will use `react-router-dom` package in our project. 

`createBrowserRouter` from react-router-dom is the recommended router for all React web projects [From the documentation](https://reactrouter.com/en/main/routers/create-browser-router). Hence, we will be going ahead with `createBrowserRouter` router.

In order to understand how to use `createBrowserRouter`, refer to the documentation [createBrowserRouter Documentation](https://reactrouter.com/en/main/start/overview) for understanding.