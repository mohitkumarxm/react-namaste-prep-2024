import React from "react";
import { CON_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { id, name, cuisines, avgRating, sla, cloudinaryImageId } =
    props?.resData;

  return (
    <div className="res-card">
      <img
        className="res-card-img"
        // src={CON_URL}
        src={CON_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
