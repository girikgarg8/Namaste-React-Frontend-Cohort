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

For using routing in React, there can be different types of routers (available in documentation) but most commonly we use createBrowserRouter 

while specifying the routing, we use path and element, path specifies the path like '/about' and element specifies which component is to be used

Just using createBrowserRouter from react-router-dom won't work because we need to provide thr router to the app, so we use, for this we use RouterProvider compoennt from react-router-dom


useRouteError is a hook provided inside react-router-dom which returns an object containgin detailed information abput why rotuing failed

Single Page applications(SPA's): in earlier days, there used to be different pages for different pages of the website lie website.com/about.html or website.com/contact.html: a network call had to be made for visiting different pages on the same website: but this is not the case with single page applications

Two types of routing in React: client side routing and server based routing
Server based routing: the new page will come from the server
client side routing: we don't make a network call, all the components are already there in the code

One way to place a link could be with anchor tag <a>, but that would reload the entire page (server side reloading)
to prevent this I use client side routing with "Link" from react-router-dom

The syntax is something like:
import { Link } from "react-router-dom"

<li> <Link to="/about"> About </Link> </li>

Behind the scenes, Link also uses anchor tag <a> (if we see in the console), but using Link from react-router-dom has the advantage that it keeps track of all the links (just like useState keeps track of all state variables)

The problem with the app till now is that if I load the about us page, the header and footer page will disappear, but I want header and footer to be there on each page, so <Header> </Header> {Outlet code} <Footer> </Footer>, the outlet code will be the code which is actually rendering according to the page (whether it is "/" or "/about" )

For using Outlet, we use Outlet from "react-router-dom"

All the children which we specify in the routing configuration will be passed to <Outlet/> according to the route used (We can call it conitional routing )

Dynamic routing: the routes are not hardcoded, but they vary according to which link I am clicking. Like on swiggy.com, if I click restaurant sagar-ratna, link will be swiggy.com/sagar-ratna and if I click on Gopal, link will be swiggy.com/Gopal

I want to build a functionality where if I visit the route localhost:1234/restaurant/123 I get the message "Welcome to restauarnt 123" and if I visit localhost:1234/restaurant/124, I get the message displayed as "Welcome to restuarnt 124"

For implementing this functionality I need to know the params which were passed, so there's a hook which is known as useParams which enables me to get the param "123" or "1234" etc

Modularity makes the code understandable, testable, readable and maintainable
