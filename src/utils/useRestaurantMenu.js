import React, { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resDetails, setResDetails] = useState(null);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    const itemCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    setResDetails(json);
    setResInfo(itemCards);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return [resInfo, resDetails];
};

export default useRestaurantMenu;
