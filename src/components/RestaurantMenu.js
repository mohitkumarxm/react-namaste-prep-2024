import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, resDetails] = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const newResList = resInfo.filter((item) => item?.card?.card?.title);
  const { name, cuisines, costForTwoMessage } =
    resDetails?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="menu-container text-center">
      <h1 className="text-4xl font-bold py-10">{name}</h1>
      <div className="w-full grid grid-cols-1 px-4">
        <div className="w-full max-w-5xl mx-auto space-y-2">
          {newResList.map((item, index) => (
            <RestaurantCategory
              resMenu={item}
              key={item?.card?.card?.title}
              showItems={index === showIndex ? true : false}
              setShowIndex={() =>
                index === showIndex ? setShowIndex(null) : setShowIndex(index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

{
  /* <div key={resMenu.card.info.id} className="menu-item-card">
<h2>{resMenu.card.info.name}</h2>
<h4>
  Rs.
  {resMenu.card.info.defaultPrice
    ? Math.floor(resMenu.card.info.defaultPrice / 100)
    : Math.floor(resMenu.card.info.finalPrice / 100)}
</h4>
</div> */
}
