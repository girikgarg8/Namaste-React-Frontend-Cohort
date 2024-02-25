import { SWIGGY_RESTAURANTS_API_URL } from "../../utils/constants.js";
import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import { Breathing } from "react-shimmer";

const Body = () => {
  const [fetchedRestaurants, setFetchedRestaurants] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchRestaurants, setSearchRestaurants] = useState([]);
  const [renderRestaurants, setRenderRestaurants] = useState([]);

  const filterRestaurantsOnRating = (resList) => {
    const filteredresList = resList.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );
    return filteredresList;
  };

  useEffect(() => {
    if (!searchText && !isFiltered) {
      setRenderRestaurants(fetchedRestaurants);
      setSearchRestaurants([]);
    } else if (!searchText && isFiltered) {
      const filteredResList = filterRestaurantsOnRating(fetchedRestaurants);
      setRenderRestaurants(filteredResList);
      setSearchRestaurants([]);
    } else if (searchText && !isFiltered) {
      const pattern = new RegExp(searchText, "i");
      const searchList = fetchedRestaurants.filter(
        (restaurant) => restaurant?.info?.name.match(pattern) != null
      );
      setSearchRestaurants(searchList);
      setRenderRestaurants(searchList);
    } else if (searchText && isFiltered) {
      const pattern = new RegExp(searchText, "i");
      const filteredResList = filterRestaurantsOnRating(fetchedRestaurants);
      const searchList = filteredResList.filter(
        (restaurant) => restaurant?.info?.name.match(pattern) != null
      );
      setSearchRestaurants(searchList);
      setRenderRestaurants(searchList);
    }
  }, [searchText]);

  useEffect(() => {
    async function fetchRestaurants() {
      const apiResponse = await fetch(SWIGGY_RESTAURANTS_API_URL);
      const restaurantData = await apiResponse.json();
      const restaurantsList =
        restaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setFetchedRestaurants(restaurantsList);
      setRenderRestaurants(restaurantsList);
    }
    fetchRestaurants();
  }, []);

  useEffect(() => {
    if (isFiltered) {
      const filteredresList = filterRestaurantsOnRating(renderRestaurants);
      setRenderRestaurants(filteredresList);
    } else if (searchRestaurants.length != 0) {
      setRenderRestaurants(searchRestaurants);
    } else {
      setRenderRestaurants(fetchedRestaurants);
    }
  }, [isFiltered]);

  if (fetchedRestaurants.length === 0) {
    const shimmerCards = [];
    for (let i = 0; i < 20; i++) {
      shimmerCards.push(
        <Breathing key={i} height={390} width={194} className="shimmer-card" />
      );
    }
    return <div className="shimmer-container">{shimmerCards}</div>;
  }
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="🔎 Search restaurants"
          className="search-btn"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>
      <div className="filter">
        <button
          className={
            isFiltered ? "filter-btn-selected" : "filter-btn-not-selected"
          }
          onClick={() => {
            setIsFiltered(!isFiltered);
          }}
        >
          4.5+ rated restaurants
        </button>
      </div>
      <div className="res-container">
        {renderRestaurants.map((resObj) => (
          <RestaurantCard key={resObj?.info?.id} resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
