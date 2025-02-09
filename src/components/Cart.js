import React from "react";
import SingleDish from "./SingleDish";
import { useDispatch } from "react-redux";
import { clearcart } from "../utils/cartSlice";

import { useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="menu-container text-center">
        <h1 className="text-4xl font-bold py-2">Cart</h1>
        <button
          className="text-lg bg-black font-bold py-2 px-6 text-white rounded-md"
          onClick={() => dispatch(clearcart())}
        >
          Clear Cart
        </button>
        <div className="w-full grid grid-cols-1 px-4">
          <div className="w-full max-w-5xl mx-auto space-y-2">
            {cartItems?.length > 0 ? (
              cartItems?.map((dish, index) => (
                <div key={index}>
                  <SingleDish dish={dish} />
                </div>
              ))
            ) : (
              <h1>Cart is Empty</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
