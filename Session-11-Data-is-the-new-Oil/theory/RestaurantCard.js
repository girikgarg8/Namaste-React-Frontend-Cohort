import { CLOUDINARY_CDN_URL } from "../../utils/constants.js";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CLOUDINARY_CDN_URL + cloudinaryImageId}
      ></img>
      <h3> {name} </h3>
      <p> {cuisines.slice(0, 2).join(", ")} </p>
      <h4> {avgRating} stars </h4>
      <h4> {costForTwo}</h4>
      <h4> {sla.deliveryTime} minutes </h4>
    </div>
  );
};

/** input: RestaurantCard component
 * output: a new component with the label, and it internally also invokes the RestaurantCard Component
 */
export const withTopRatedLabel = (RestaurantCard) => {
  const restaurantCardWithTopRatedLabel = (props) => {
    return (
      <div>
        <label className="restaurant-card-top-rated-label">
          {" "}
          Top Rated ⭐️
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
  return restaurantCardWithTopRatedLabel;
};

export default RestaurantCard;
