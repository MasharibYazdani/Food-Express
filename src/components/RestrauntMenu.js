import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUI from "./ShimmerUI";
import { IMG_LINK } from "../utils/constants";

import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

function RestrauntMenu() {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  const [click, setClick] = useState(null);

  // const [collapse, setCollapse] = useState(true);

  if (resMenu === null) {
    return <ShimmerUI />;
  }

  const { name, areaName, cuisines, avgRating, costForTwoMessage } =
    resMenu?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="text-2xl my-4 font-bold">{name}</h1>
      <p className="font-bold text-m">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategories
          key={category.card.card.title}
          data={category.card.card}
          click={index === click && true}
          setClick={() => setClick(index)}
        />
      ))}
    </div>
  );
}

export default RestrauntMenu;
