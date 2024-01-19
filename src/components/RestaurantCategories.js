import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, click, setClick }) => {
  const handleClick = () => {
    setClick();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-lg ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-md">
          {data.title} ({data.itemCards.length})
        </span>{" "}
        <span>👇</span>
      </div>
      {click && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategories;
