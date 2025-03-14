import React, { useState, useEffect, useContext } from "react";
import resList from "../utils/mockData";
import RestaurantCard, { openRestaurant } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const WithOpenStatusRestaurantCard = openRestaurant(RestaurantCard);

  const { setUserName, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.664325&lng=78.1460142&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info
      ) // My doubt lies here
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info
      )
    );
  };

  if (onlineStatus === false) {
    return (
      <h2>
        Looks like you are offline!!. Please check your internet connection.
      </h2>
    );
  }

  console.log("fetched Data ==", listOfRestaurants);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center my-4 py-4">
        <input
          className="border-black border-2 rounded-sm w-100 h-10 px-4"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 mx-4 bg-green-500 border-black border-2 rounded-sm cursor-pointer"
          onClick={() => {
            const searchList = listOfRestaurants.filter((restaurant) =>
              restaurant.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log("Search text ==", searchText);
            console.log("Search searchList ==", searchList);
            setFilteredRestaurant(searchList);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center my-4">
        <button
          className="px-4 mx-4 bg-green-500 border-black border-2 rounded-sm cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.avgRating > 4.4
            );
            console.log(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants 😊
        </button>
      </div>
      <div className="flex justify-center my-4 py-4">
        <input
          className="border-black border-2 rounded-sm w-100 h-10 px-4"
          type="text"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((res) => (
          <div key={res.id}>
            {res.totalRatingsString > 150 ? (
              <WithOpenStatusRestaurantCard resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
