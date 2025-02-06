import React from "react";

const ItemsList = ({ dish }) => {
  return (
    <>
      <p className="text-gray-900 text-sm md:text-base py-4">
        {dish?.card?.info?.name}
      </p>
    </>
  );
};

export default ItemsList;
