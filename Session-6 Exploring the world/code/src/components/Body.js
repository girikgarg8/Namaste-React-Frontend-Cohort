import { SWIGGY_RESTAURANTS_API_URL } from "../../utils/constants.js";
import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import { Shimmer, Breathing } from "react-shimmer";

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

  if (filteredRestaurants.length === 0) {
    const shimmerCards = [];
    for (let i = 0; i < 20; i++) {
      shimmerCards.push(
        <Breathing height={390} width={194} className="shimmer-card" />
      );
    }
    return <div className="shimmer-container">{shimmerCards}</div>;
  }
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
