## FoodVilla

FoodVilla is an online food ordering app, which integrates with Swiggy APIs to fetch restaurant details. It futher allows the users to explore the menu offered by these restaurants, and add them to cart for placing the order.

## Tech Stack Used

- React
- Redux Toolkit
- Tailwind CSS
- Jest

## Other details 

The high level design is here: ![High-Level-Diagram-Food-Villa](../High-Level-Design-Food-Villa.png)

The low level details are documented here: [Low level details](../Low-Level-Design-Food-Villa.txt)

In case the Swiggy API contract to fetch the list of restaurants/ Cloudinary CDN URL changes, please update the URL [here](./code/utils/constants.js) and make the relevant destructuring changes in [Body Component](./code/src/components/Body.js) and [RestaurantCard Component](./code/src/components/RestaurantCard.js)

We are using an API to get the restauarant menu from Swiggy API which can be found here [Swiggy Restaurants Menu API](./code/utils/constants.js). In case this API contract changes, please make the changes here [RestaurantMenu](./code/src/components/RestaurantMenu.js), [MenuCategory](./code/src/components/MenuCategory.js) and [ItemList](./code/src/components/ItemList.js)

