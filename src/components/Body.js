import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useAllRestaurantData from "../utils/useAllRestaurantData";

const Body = () => {
  const { originalData, restaurants, setRestaurants } = useAllRestaurantData();

  const [searchText, setSearchText] = useState("");

  return originalData.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className=" border border-gray-300 bg-cyan-50">
      <div className="flex mt-5 ml-8 ">
        <div>
          <input
            className="border border-gray-300 px-4 py-1 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Enter the text here"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded "
            onClick={() => {
              const filterdRes = originalData.filter((x) =>
                x.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (filterdRes) {
                setRestaurants(filterdRes);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="mx-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded"
          onClick={() => {
            const result = restaurants.filter((x) => x.info.avgRating > 4.1);
            setRestaurants(result);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="m-3 flex flex-wrap justify-start">
        {restaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
