import { useState } from "react";
import restList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restList);

  // const filterRes =

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const result = restaurants.filter((x) => x.info.avgRating > 4.1);
            setRestaurants(result);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
