import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  const [originalData, setOriginalData] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const rData =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      //To handle the error when data is not defined or data is not fetching properly
      setRestaurants(rData || []);
      setOriginalData(rData || []);
    } catch (error) {
      console.log("Error while fetching home page : " + error);
    }
  };

  return originalData.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="m-1 border border-gray-300 bg-cyan-50 rounded-md">
      <div className="flex mt-3 ml-5 ">
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
      <div className="flex flex-wrap justify-around">
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
