import { SWIGGY_RESTAURANTS_API_URL } from "../../utils/constants.js";
import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";

const Body = () => {
  const [fetchedRestaurants, setFetchedRestaurants] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(fetchedRestaurants);

  useEffect(() => {
    async function fetchRestaurants() {
      const apiResponse = await fetch(SWIGGY_RESTAURANTS_API_URL);
      const restaurantData = await apiResponse.json();
      const restaurantsList =
        restaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setFetchedRestaurants(restaurantsList);
      setFilteredRestaurants(restaurantsList);
    }
    fetchRestaurants();
  }, []);

  return (
    <div className="body">
      <div className="filter">
        {Object.keys(fetchedRestaurants).length != 0 && (
          <button
            className={
              isFiltered ? "filter-btn-selected" : "filter-btn-not-selected"
            }
            onClick={() => {
              if (!isFiltered) {
                const filteredresList = filteredRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating >= 4.5
                );
                setFilteredRestaurants(filteredresList);
              } else {
                setFilteredRestaurants(fetchedRestaurants);
              }
              setIsFiltered(!isFiltered);
            }}
          >
            4.5+ rated restaurants
          </button>
        )}
      </div>
      <div className="res-container">
        {Object.keys(fetchedRestaurants).length === 0 ? (
          <h1> Loading, please wait </h1>
        ) : (
          filteredRestaurants.map((resObj) => (
            <RestaurantCard key={resObj.info.id} resData={resObj} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
