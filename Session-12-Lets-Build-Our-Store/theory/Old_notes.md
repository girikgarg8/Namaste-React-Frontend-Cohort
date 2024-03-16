===CH-12 LET'S BUILD OUT STORE===

Redux is needed in big projects  (production ready applications) tp mamange the data layer of the React App. 

How dark mode toggle button is made? (click on moon icon, and mode switches to dark mode): It is made possible using Context API, all the components are sharing a state of dark, and once I click on the button, all the components inside the app get the updated state

Instead of creating different contexts, I can use Redux.

For small application, Context API is fine, but for big applications Redux is more fine.

Problems with Redux: installation complex, high learning curve

A bit about history of Redux

In order to make a large scale web applivcation, only using React is not sufficient, we need bundlers, we offload the responsibility of data to Redux and Context API, we need a separate package for testing like Jest


Redux has come up with something called Redux Toolkit, because programmers find it difficult to program it.

All application which we build noweadays involve Redux toolkit rather than Redux

Redux store, at ethe end of the day, is like a big-all object

=> Big object which have different sections, those sections have small pieces

All the components can access Redux store

Redux store is accessible to all components, the web aplication is different from Redux store.

We keep all the data in the Redux store, whether it is authentication related data or cart related information etc

It's not a good practice to keep all data in the Redux store, because we will create logical partitions (slices) of the store

The technical term for logical partition of Redux Store is known as Slice. (like a cart Slice, user Slice etc)

If I click a + (add item ) button from the UI, I can't directly make changes to the store, I need to dispatch an action, so when we click on the + button, we'll dispatch an item (like the action could be to 'add an item' )

This action will call a function, and then the function will make changes in the particular slices of the store.

Why can't we directly modify the store by clicking on the + icon from the UI? Because in a large scale production ready application, I don't want any random component to change some state, I want to keep track of all the changes.

Data is source of truth, we don't want any component to randomnly change the state, we want to go through a process

The question is similar to asking why don't we use a monolithic architecture to build the applicaton? The answer is separation of concern (Separation of concern is a programming term, and a good word choice for interviews :D ) 

Time for another jargon :D, the function which the action calls, that function is known as reducer


So, finally putting it all in one place, I can say that whenever I click on the + button to add to cart, it dispatches an action, which calls a reducer function, and the reducer function updates the Redux Store

Understanding the architecture of Redux is very important, writing code is secondary thing :)

Now we also want some information from the store, like on Swiggy website, I can see (2 items added to cart)

There's just one more jargon for Redux :D, Selector, if I want to access any item from cart, seelctor wil get the value from Redux store and then pass it to the UI (Number of items added to the cart)

Selector is called so because it is selecting a slice from the store

https://drive.google.com/file/d/1LBmF6_FsvvlaJS7YeMAf9RTigfYwuPtR/view?usp=sharing See this link for a pictorial explanation of the entire concept, it's a very nice images


When we use a selector, it is called "Subscribing to the store" in technical terms, so I can say the cart component has subscribed to the store (means when the store will modify, the cart will automatically modify in the UI)

Selector is a hook (useSelector) at the end of the day, and a hook is a normal function at the end of the day :)

React is different from Redux, many people don't understand the difference between them :)

I need to install two libraries for using Redux, one is @reduxjs/toolkit and the other one is react-redux

Why two libraries are needed? The @reduxjs/toolkit contains the core of Redux like maintaining the store etc whereas react-redux acts like a bridge between React and Redux

As my application and Redux are different (similar in the case of Context API), I need to provide the store to the React App using Provider.

So, in order to provide the store to the React App, I will import Provider from react-redux library.

Redux Tolkit is often shortened to RTK.

 Summary of what we did in Redux to set up the cart:

 1. Create store: using configureStore(): defined in RTK (Redux-toolkit)

2. Provide the store to the app: using <Provider store={store} /> imported from "react-redux"

3. Creating the slice: using createSlice provided by RTK

createSlice({
  name: "",
  intialState: something,
  reducers:{
    addItem: ()=>{ logic },
    removeItem: ()=> {logic}
  }
})

exporting the action using export {addItem,removeItem}=cartSlice.actions;

export default cartSlice.reducer

4. Adding the slice to the store

{
  reducer:{
    cart:cartSlice,
    user:userSlice
  }
}

To dispatch an action in Redux, I use the syntax: dispatch(addItem("Grapes")), this addItem was actually a named import of action in the cartSlice.js file, so wherever I use this action, I need to dispatch the action as well

This dispatch will be provided by a hook known as useDispatch, so the syntax would be something like:  const dispatch=useDispatch(), and this hook useDispatch will be imported from "react-redux"


Very important point asked by Akshay sir in many interviews, how do I subscribe to store in Cart.js? I will use code like useSelector (store=>store.cart.items), I am subscribing to otems array in cart slice of store, there can be performance issues if I just subscribe to store, something like useSelector (store=>store), but this will lead to bad performance, reason being if I subscribe to the whole store, the Cart component will re-render everytime there is a change in the store, but this is not the desired behavior.
