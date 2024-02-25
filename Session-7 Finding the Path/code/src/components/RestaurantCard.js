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
      <p> {cuisines.join(", ")} </p>
      <h4> {avgRating} stars </h4>
      <h4> {costForTwo}</h4>
      <h4> {sla.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard;
