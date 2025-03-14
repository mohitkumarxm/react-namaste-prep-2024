import React, { useContext } from "react";
import { NavLink } from "react-router";
import { CON_URL } from "../utils/constants";

import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { id, name, cuisines, avgRating, sla, cloudinaryImageId } =
    props?.resData;

  const loggedInUser = useContext(UserContext);
  console.log("Logged In User", loggedInUser);

  return (
    <NavLink to={"restaurants/" + id}>
      <div className="w-[250px] h-[450px] m-4 p-4 bg-red-100 rounded-sm border-2 border-red-100 cursor-pointer hover:border-black hover:shadow-xl hover:shadow-amber-200 hover:bg-red-300">
        <img
          className="w-full h-40 rounded-sm mb-4"
          // src={CON_URL}
          src={CON_URL + cloudinaryImageId}
        />
        <h3 className="w-full mb-4 text-xl font-semibold">{name}</h3>
        <h4 className="w-full mb-4">{cuisines.join(", ")}</h4>
        <h4 className="w-full mb-4">{avgRating} ⭐</h4>
        <h4 className="w-full mb-4">{sla.slaString}</h4>
        <h4 className="w-full mb-4">{loggedInUser}</h4>
      </div>
    </NavLink>
  );
};

// higher order component
// take input as restaurant card and return enhanced restaurant card.

export const openRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute left-2 bg-black text-white m-2 p-2 rounded-lg">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
