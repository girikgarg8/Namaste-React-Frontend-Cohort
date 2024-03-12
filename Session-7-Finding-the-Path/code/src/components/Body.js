import { SWIGGY_RESTAURANTS_API_URL } from "../../utils/constants.js";
import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import resList from "../../utils/mockData.js";
import { Breathing } from "react-shimmer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../utils/UserContext.js";
import Footer from "./Footer.js";

const Body = () => {
  const [fetchedRestaurants, setFetchedRestaurants] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchRestaurants, setSearchRestaurants] = useState([]);
  const [renderRestaurants, setRenderRestaurants] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const userContext = useContext(UserContext);

  const filterRestaurantsOnRating = (resList) => {
    const filteredresList = resList.filter(
      (restaurant) => restaurant?.info?.avgRating >= 4.5
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
      if (restaurantsList === undefined) {
        setFetchedRestaurants(resList);
        setRenderRestaurants(resList);
      } else {
        setFetchedRestaurants(restaurantsList);
        setRenderRestaurants(restaurantsList);
      }
    }
    fetchRestaurants();
  }, []);

  useEffect(() => {
    if (isFiltered) {
      const filteredresList = filterRestaurantsOnRating(renderRestaurants);
      setRenderRestaurants(filteredresList);
    } else if (searchRestaurants?.length != 0) {
      setRenderRestaurants(searchRestaurants);
    } else {
      setRenderRestaurants(fetchedRestaurants);
    }
  }, [isFiltered]);

  const handleButtonClick = () => {
    if (userName != "") {
      userContext.userName = userName;
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn && userContext.userName == "") {
    return (
      <div className="login-container">
        <div className="login-prompt">Your name, please? </div>{" "}
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          className="login-button-input"
        />
        <button onClick={handleButtonClick} className="login-button-submit">
          Let's get started !
        </button>
      </div>
    );
  }

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
          Filter 4.5+ rated restaurants
        </button>
      </div>
      <div className="res-container">
        {renderRestaurants.map((resObj) => (
          <Link to={"/restaurants/" + resObj?.info?.id} key={resObj?.info?.id}>
            <RestaurantCard resData={resObj} />{" "}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
