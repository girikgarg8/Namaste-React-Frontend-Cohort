The high level diagram is here: ![High-Level-Diagram-Food-Villa](../High-Level-Design-Food-Villa.png)

The low level details were documented here: [Low level details](../Low-Level-Design-Food-Villa.txt)

In case the Swiggy API contract/ Cloudinary CDN URL changes, please update the URL [here](./code/utils/constants.js) and make the relevant destructuring changes in [Body Component](./code/src/components/Body.js) and [RestaurantCard Component](./code/src/components/RestaurantCard.js)

We are using a CORS proxy in order to avoid CORS policy errors. Refer [this](./theory/Notes.md) for more details.