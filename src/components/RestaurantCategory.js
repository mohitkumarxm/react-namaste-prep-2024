import React, { useState } from "react";

import ItemsList from "./ItemsList";
import SingleDish from "./SingleDish";

const RestaurantCategory = ({ resMenu, setShowIndex, showItems }) => {
  console.log("RestaurantCategory = ", resMenu);

  return (
    <>
      {resMenu?.card?.card?.itemCards?.length > 0 ? (
        <div className="w-full m-4 bg-gray-100 rounded-md shadow-md">
          <button
            className="w-full  p-4 transition duration-300"
            onClick={() => setShowIndex()}
          >
            <div className="flex justify-between items-center gap-2">
              <span className="text-lg font-bold  px- 4 text-left w-[90%] md:w-[95%]">
                {resMenu?.card?.card?.title} (
                {resMenu?.card?.card?.itemCards?.length})
              </span>
              <span className="text-xl w-[10%] md:w-[5%]">
                {showItems ? "🔼" : "🔽"}
              </span>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ${
              showItems ? "h-auto p-4" : "max-h-0"
            }`}
          >
            {resMenu?.card?.card?.itemCards?.map((dish, index) => (
              <div key={dish?.card?.info?.categoryId}>
                <SingleDish dish={dish} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RestaurantCategory;
