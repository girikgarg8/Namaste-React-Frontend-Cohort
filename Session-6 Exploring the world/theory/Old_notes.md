If I create a search button using 
const txt="Girik"
<input type="text" className="search-input" placeholder="Search" value="{txt}"></input>, it will not accept any data from the user, the reason being that React uses one way binding, meaning that data can only flow from the code to the user but not from the user to the code

One way data binding is actually good in a sense that it makes our app predictable, because we might be using that variable at many places in the code, so the value can be changed by different values. But it creates a problem for us because we can't take input from the user. 
so I need to use onChange attribute for this function, something like: TODO

whenever I have changing variables in React, I need to use a kind of React variable called state variables (every component in React has a state)

React hook is just a javascript function at the end of the day and these functions give us some functionalities.


useState hook: const [searchText]=useState()
useState hook return an array [variable name, function to update the variable]
what is use of function useState? to create local state variables

I can't directly set the variables in the react component, I need to use function provided by useState(), something like:
const [searchText,setSearchText]=useState("KFC") and then use the function setSearchText 

in the onChange function as a callback function in: onChange={(e)=>
        {setSearchInput(e.target.value)} 
       } 

Interview question: why do we need state variables when I have local variables?
if I use a local variable let var1=11, and if I update the variable var1 to some other value like 12, then React component would not come to know that the value of local variable has been updated

So React says that at any time if we want the variables to be in sync with the UI, we need to use state variables

Entire component is re-rendered, so if we print ('render'), it will get printed (from 6th chapter of React, exploring the world 1 1080pixel), 

Whenever there is any change in the state, React quickly rerenders the entire component gets

Important concept in industry: microservices
Swiggy/uber is not made of single React app etc

In earlier days: in same project, aws, ui (jsp pages) and code to send SMS was there
for just one icon change, they had to deploy the whole project
This is called monolith architecture

The world  (newer companies are moving towards microservices architecture)

Microservice App: Separate projects for UI, logs, SMS etc
Let's say UI is running on port 1234 and API is working on port 1235
advantage: 1) seperation of concern (important term): we don't need to worry about the other microservices, what they are doing or not

The different microservices can be written in different languages like UI can be written in React, backend can be written in Java, etc

What we are making in this project is the UI microservices

So the different mictoservices can be hosted on different ports (or different URLs too):
like swiggy.com (UI) on port 3000
swiggy.com/api on port 4000
swiggy.com/notifications on port 5000

or it can be like github.com or api.github.com

Exploring the world means communication between UI microservice and API microservice

const Body = () => {
  IMPORTANT: if I call fetch() here, it will rerender on each UI update
  // const searchTxt="KFC"
  //searchText is a local state variable
  const [searchText,setSearchInput]=useState("") //to create state varibable
  return (
    <div> .....</div>
  )

There are two ways:
1) the website request is made->make an API call (say, it takes about 300 ms)->render page in React (say it takes 200 ms ) in total takes about 500 ms

2) the website request is made-> show some intial page (maybe even render the page)->make the API call-> update the UI (takes 300 ms in total let's say)

second way is a better way due to enhancing user experience

useEffect is a hook for accomplishing the second way (rendering a page first, call and API and then updating in the UI)

in useEffect() function, we pass a callback function so the syntax looks something like:

useEffect(()=>{
  callback function body
})

callbac function means that the function will not be called immediately, it will be called when useEffect wants to call it

so using useEffect hook, the function for API call will be called after the code of UI has executed (the second case which we discussed above)

useEffect is imported using named import from "react"

When will component render? 2 ways: state changes or prop changes

Now there's a catch: we don't want to call the callback function after every re-render, so we use a dependency array

so overall syntax of useEffect looks like
useEffect(()=>{
  console.log("render")
},[])

use case: we want to cal useEffect only when searchText is changed

If dependency array is empty then that component will not re-reneder for any update

If empty dependency array, then console.log() will be called once after render
if dependendcy array is [searchText], then it will be called once after intitial render and everytime after render (every time searchText changes)

The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.

When we open swiggy.com, we see some empty boxes at the first and then the restaarant cards appear
This is done to improve user experience so that the data does not appear all of a sudden on the page after the loading rotating in circular fashion

This is known as shimmer effect : https://blog.logrocket.com/implement-shimmer-effect-flutter/#:~:text=What%20is%20a%20shimmer%20effect,when%20the%20data%20is%20available. Read more about it here

Conditional rerendering: means if restaurant is empty, then load shimmer UI otherwise load actual UI

Diff algorithm is defined in React not react-dom (diff algorithm is same in react-dom and react-native for mobile applications)

If I don't specify any dependency in the useEffect hook, something like useEffect(function), it assumes dependency on each variable, so it will be called after every re-render but for empty array [], useEfffect will be called only during initial render

It's not a good idea to define a component inside another component, for example, the following code is not good:

const appLayout=()=>{
  const func=(){

  }
}
Reason: every time there is a change in appLayout, func will be rerendered too

Never use a useState hook inside a for loop or if condition(because it leads to inconsistencies)
Never use useState outside the functional component

It is completely fine to use multiple useEffect inside a functional component, but perforemance of app will go down