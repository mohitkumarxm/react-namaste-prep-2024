import React from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { CON_URL } from "../utils/constants";

const SingleDish = ({ dish }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="grid  grid-cols-[70%_30%] gap-4 py-8 px-4 border-b-2">
        <div className="text-left">
          <h2 className="text-gray-900 text-sm md:text-base py-2 font-bold">
            {dish?.card?.info?.name}
          </h2>
          <h4 className="font-extrabold">
            Rs.
            {dish?.card?.info?.defaultPrice
              ? dish?.card?.info?.defaultPrice / 100
              : dish?.card?.info?.price / 100}
          </h4>
          <p> {dish?.card?.info?.description}</p>
        </div>
        <div className="flex justify-center relative ">
          <img
            src={CON_URL + dish?.card?.info?.imageId}
            width={150}
            height={150}
            className=" rounded-md shadow-md"
          />
          <button
            className="absolute bottom-[-20px] bg-amber-400 font-bold py-2 px-10 rounded-md"
            onClick={() => dispatch(addItem(dish))}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleDish;
