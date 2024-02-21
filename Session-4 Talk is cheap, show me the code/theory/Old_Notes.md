There are two syntaxes to create React element, one of them is to use the React.createElement API, the other one is to wrap the JSX code in curly braces. 

for example,consider the code: `const element = <h1>Hello, world!</h1>;`, the element variable now contains a React element. 

Some things to know, before we start coding.

Q1: Is using JSX compulsory in React?

A: No, we can use React elements. In fact, JSX behind the scenes, uses React elements.

`Q2: Is using ES6 compulsory for React?`

A2: The answer to this question, is also NO. React is a library, which doesn't force conditions on us in order to use it.

== Let's start with the coding part NOW!!! ==

Before writing code, it is always necessary to do planning, so that we are not confused on what to code.

Disadvantage of using div to wrap the siblings is that I have an extra div in the DOM tree, (go see it now!), which I don't want.

So, we can use React fragments instead of using a separate div. The syntax for using React fragment is <React.fragment> {Intermediate code} </React.fragment>

There's also another syntax for React.Fragment, which is the empty tag <>, it alspo signifies the React.Fragment element behind the scenes. (**This is very very important**)

Advantage and disadvantage of using React.fragment over a div:

1) Advantage: Using React.fragment makes the DOM less cluttered, and also gives performance improvement to the React App.

2) Disadvantage: As we use the empty tag <> or React.fragment, we cannot give it styling or pass props to it. If we wish to use styling, using div is a better choice. 

Inline styling in HTML vs Inline styling in React 

In HTML, I can do the inline styling with code like: `<h1 style="color:blue;">A Blue Heading</h1>`. See this link: [W3 playground for inline CSS](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_inline)

 However, I cannot write the same syntax in React, to do styling in React, I need to specify the style with the help of a Javascript object (Javascript object is nothing but a key-value pair in Javascript) (because React is a javascript library). 

Syntax to do inline styling in React is:

```
const styleObj= {
    border: "1px solid red"
}
```

and then use it like 

``` 
const Heading=()=>{
    return (
        <div style={styleObj} > <h1> First Heading </h1> <h1> Second Heading </h1> </div> 
    )
} 
```

Sometimes, people also write the style object directly, so no need to get scared of the code:

```
const Heading=()=>{
    return (
        <div style={styleObj} > <h1> First Heading </h1> <h1> Second Heading </h1> </div> 
    )
} 
```

We can also use libraries like Chakra UI, Material UI, Tailwind CSS too instead of using inline CSS. We'll be using Tailwind CSS in later chapters.

Beginning with the coding: Desiging the restaurant Card

The first step, should be, to create a restaurant code with hardcoded data, once we are able to succeed with that, we can then go for the data fetched from API.

See the `DummyRestaurantCard` functional component, I have created a restautrat card with static data there.

Now, let's try to create a restaurant card with JSON data (we are slowly moving onto fetching the data from API and then displaying it on UI, these small baby steps are useful rather than directly jumping to fetching data from UI)

See the `burgerKing` object and the `DummyRestaurantCardFomObject` components to see how this is done. 

In order to access the property from Javascript object, I will use braces, in order to execute Javascript.

I'll be using the `join` function of Javascript, it's role is to convert an array into a string.

For example, 

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");
```

will return me the name of all the fruits separated by the keyword "and". See the documentation: [join function in Javascript](https://www.w3schools.com/jsref/jsref_join.asp)


Now, I could have multiple restaurant cards, so try adding multiple dummyRestaurantCardFromObj to the AppLayout.

Now, in order to style the multiple restaurant cards, I require some basic styling, **Knowledge of some basic styling is necessary for machine coding interviews,see the basic knowledge of CSS file (I have included the properties that I have used in index.css) file**

Now, let's try to make the cards in a dynamic fashion, in real world, the data is not in the form of an object like 

```
const burgerKing={
    name: "Burger King",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    rating: "4.2",
    cuisines: ["Burgers","American"]
}
```
In fact, the response that any API would be sending is an `array of objects`, so the response from an API would be something like (at a high level):

```
    const res=[
        {obj1,
        obj2,
        obj3
        }
    ]
```

So, going into the low level details, the response from any API would look like:

```
const burgerKing=[
    {
        name: "Burger King",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        rating: "4.2",
        cuisines: ["Burgers","American"]
    },
    {
        name: "Subway",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        rating: "4.1",
        cuisines: ["Pizza","fries"]
    }
]
```

Go to swiggy.com, get the link of any API through the browser's console, and explore what data the API sends by opening it in the browser.

One such API is: (Swiggy API)[https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&page_type=DESKTOP_WEB_LISTING]

**Important Concept and Term: Config Driven UI**

`Introduction`

Just see the Swiggy API above, you'll see that the API is returning me two types of data, one for `cardType=carousel` and another one for `cardType=seeAllRestaurants`

Now, why are there two types of cardType data that the API is sending?

It's because the backend API is sending two types of data, one is the carousel information, which contains information about the different offers available in that region (like 20% off on Axis bank), whereas the cardType=restauarant is sending the information about the restaturants, their cuisines, location etc.

Now here's the thing: the offers can be different in different regions, so the offers can be different in Delhi and Mumbai. I want that the UI should display the offers according to the data that is being sent from the backend UI, in some places there might not be any offers, so no offers should be shown on the UI, at other places, the offers can vary.

This practice of showing the data on the UI on the basis of the data received from the API is known as `config driven UI`. If you go and tell about config driven UI in system design interviews, it is a huge plus point!!

Let's try to step-by-step create a sample response sent by the backend API, like the one sent by Swiggy. (In real world applications, the data sent by the API is also complex like this). See the `sampleAPIResponse.js` file

**What is optional chaining in Javascript?**

If a property of an object is nullish (null or undefined), using optional chaining will help me to get an undefined, instead of throwing an error on the UI.

The syntax is `obj?.val`. Read the documentation: [MDN documentation on optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

Next, we tried to create some mock data for learning, from further sessions, we'll be using API to fetch the data.

We need to pass prop (property) to the DummyRestauarantCardFromObj functional component, so that we can tell the component which card we want to render.

Passing the props means passing some data or a value to a component.

**Important point:If I pass in the properties to a component like <Card name="girik" age=46 city="Delhi", React will combine or bundle them into a single object called props, which is received inside the React functional component, something like const Card=(props)=>{console.log(props)}**

One was of using props is to access the props like props.name, props.age etc. (The variable props is passed as argument to the functional component)

Another way of using props is to destructure the object on the fly, which is similar to destructing an object in Javascript. 

Syntax to destructure an object in Javascript:

```
const obj={ //creating an object literal
    name: 'Girik',
    age: 19,
}

const {name,age}=obj;

console.log(name,age)
```

Syntax to destructure on the fly in React:

```
    const RestauarantCardComponent=({name,age})=>{
        return (
            <div>
                <h1> {name} </h1>
                <h2> {age} </h2>
            </div>
        )
    }
```

**Difference between arguments and parameters in a function (It was covered in Namaste JS)**

Just remember one sentence, we pass in arguments to a function but we receive parameters. How to remember this? 'P' for passing, and 'A' (not 'P') for arguments.

```
function fun(param1,param2,param3){


}

fun(arg1,arg2)
```

Important point: `React functional component is nothing but a Javascript function at the end of the day. Using props in functional component is like passing in arguments to a Javascript function.` 

What I mean is, when I write syntax in React like `<RestaurantCard restaurant=restuarantList[0]>`, it is equivalent to calling the function RestauarantCard with the argument restaurantList[0], something like RestaurantCard(restaurantList[0])

`<DummyRestauarantCardFromObj {...restaurantList[0].data}/>` Don't panic, if you see this type of code in any company's legacy code, it just means that I am spreading all the properties of restaurantList[0].data into the React functional component.

Now, we have multiple Restaurant cards, so we can either use for loops or higher order functions like map.

Akshay says, **The best way to achieve functional programming in React/Javascript is to use map HOF rather than using for loops. Of course, for loops can be used, but the best way is to use map HOF. Using forEach loop is also not the best choice compared to using map, using map is the best choice.**

**Virtual DOM (Important concept)**

First of all, what is DOM? DOM stand for Document Object Model, it is a tree based representation of the HTML document.

Virtual DOM is not just a React concept, it is a software engneering concept in general. So, React also uses Virtual DOM. 

`We keep a representation of actual DOM, which is called as virtual DOM.`  

**Why do we need virtual DOM in React?**


We need the virtual DOM for something known as reconciliation algorithm, in simple terms understand that whenever there is a change in the functional component, either through change of props or state,that change is reflected in the virtual DOM. Then React needs to find out what changes have been made.So,react uses an algorithm called as the reconciliation which is used to diff the virtual DOM (the stored representation of DOM in React) with the actual DOM, and by this comparison React just re-renders the specific part of the actual DOM, rather than re-rendering the complete DOM.

**Important** In flowchart terms, State/prop Change-> Updation Made in Virtual DOM (because it takes less time, even Wikipedia says this) -> Reconicilation algorithm determines the diff between the virtual DOM and the actual DOM -> React makes change only in the specific diff part in the actual DOM

**Important points** 

Note: 

1) I used to be confused about the reconicilation, it's between virtual DOM and actual DOM, not between virtual DOM and virtual DOM.

2) Reconciliation is a process, whereas diff is an algorihm. Just like graph traversal is a process, DFS is an algorithm.

Refer this wiki: [Virtual DOM](https://en.wikipedia.org/wiki/Virtual_DOM)

**Why do we need keys in React for siblings of same tag?** 

Let's take an example, let's say a ul has three li items, now if a change made is to any of the li items, or some li is deleted or a new li is added, then React reconciliation algorithm would not perform well to determine the diff between the virtual DOM and the actual DOM. So, all the li's will be re-rendered. But, had we been using keys, the individual li's could be easily identified, which will lead to better performance of the diff algorithm. Only the specific li will be re-rendered.

React Fiber is the new diff algorithm, being used since React 16.

Important point: keys are not mandatory if there are different types of tags, like an img and div tag. But using keys is mandatory if there are siblings of same tag.

If I try to use duplicate keys, then React will give me an error in the console saying 'Encountered two children with the same key, `abc`. Keys should be unique so that components maintain their identity across updates.'

Also, it is not advisable to use index in an array as a key, this is because the array indices are prone to change if the array elements are removed, added or altered.

Explore this documentation: [Why not to use index as key in React](https://legacy.reactjs.org/docs/lists-and-keys.html)

So, summarising: No key (not acceptable) <<<<< index key (okay way, use only if you don't have anything) << unique key (best practice)
