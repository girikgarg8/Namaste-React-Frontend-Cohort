import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ENABLE_DESKTOP_VIEW_SWIGGY_RESTAURANT_MENU_API,
  SWIGGY_RESTAURANTS_MENU_API_URL,
} from "../../utils/constants";
import Loader from "react-spinner-loader";
import MenuCategory from "./MenuCategory";
import Footer from "./Footer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [accordionIndex, setAccordionIndex] = useState(-1);

  const showAccordion = (index) => {
    setAccordionIndex(index);
  };

  const hideAccordion = () => {
    setAccordionIndex(-1);
  };

  const { resId } = useParams();

  useEffect(() => {
    async function fetchRestaurantInfo() {
      const apiResponse = await fetch(
        SWIGGY_RESTAURANTS_MENU_API_URL +
          resId +
          ENABLE_DESKTOP_VIEW_SWIGGY_RESTAURANT_MENU_API
      );
      const apiJSON = await apiResponse.json();
      setResInfo(apiJSON.data);
    }
    fetchRestaurantInfo();
  }, []);

  if (resInfo === null)
    return (
      <Loader
        show={true}
        message="Getting the restaurant details !"
        stack="vertical"
        type="body"
      />
    );

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu">
      <h1 className="menu-restaurant-title"> {name} </h1>
      <p className="menu-cuisines">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <MenuCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          openCallBack={showAccordion}
          closeCallBack={hideAccordion}
          index={index}
          accordionIndex={accordionIndex}
        />
      ))}
      <Footer />
    </div>
  );
};

export default RestaurantMenu;
