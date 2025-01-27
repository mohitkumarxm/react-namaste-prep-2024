import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, resDetails] = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resDetails?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      {resInfo?.map((resMenu, index) => (
        <div key={resMenu.card.info.id} className="menu-item-card">
          <h2>{resMenu.card.info.name}</h2>
          <h4>
            Rs.
            {resMenu.card.info.defaultPrice
              ? Math.floor(resMenu.card.info.defaultPrice / 100)
              : Math.floor(resMenu.card.info.finalPrice / 100)}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
