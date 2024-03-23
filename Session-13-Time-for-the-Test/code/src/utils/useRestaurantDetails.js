import { SWIGGY_RESTAURANTS_API_URL } from "./constants";

export const useRestaurantDetails = async () => {
  const apiResponse = await fetch(SWIGGY_RESTAURANTS_API_URL);
  const restaurantData = await apiResponse.json();
  return restaurantData;
};
