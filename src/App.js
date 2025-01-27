import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="restaurants/:resId" element={<RestaurantMenu />} />
      </Route>
      {/* Catch all unknown routes */}
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
