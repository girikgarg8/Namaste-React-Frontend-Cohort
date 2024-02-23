import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData.js";
import { useEffect, useState } from "react";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <div className="body">
      <div className="filter">
        <button
          className={
            isFiltered ? "filter-btn-selected" : "filter-btn-not-selected"
          }
          onClick={() => {
            if (!isFiltered) {
              const filteredresList = filteredRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setFilteredRestaurants(filteredresList);
            } else {
              setFilteredRestaurants(restaurantList);
            }
            setIsFiltered(!isFiltered);
          }}
        >
          4+ rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((resObj) => (
          <RestaurantCard key={resObj.info.id} resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
