import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, click, setClick }) => {
  const handleClick = () => {
    setClick();
  };

  return (
    <div className=" bg-gray-100 p-4 shadow-lg rounded-md">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-md">
          {data.title} ({data.itemCards.length})
        </span>{" "}
        <span>{click ? "▲" : "▼"}</span>
      </div>
      {click && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategories;
