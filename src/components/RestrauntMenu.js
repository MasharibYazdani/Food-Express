import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

function RestrauntMenu() {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  console.log(resMenu);

  const [click, setClick] = useState(null);

  if (resMenu === null) {
    return <ShimmerUI />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    city,
    avgRating,
    locality,
    totalRatings,
    areaName,
  } = resMenu?.data?.cards[0]?.card?.card?.info;

  const { message } = resMenu?.data?.cards[0]?.card?.card?.info.feeDetails;

  const { deliveryTime } = resMenu?.data?.cards[0]?.card?.card?.info.sla;

  const categories =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <>
      <div className="text-center w-6/12 mx-auto">
        <div className="text-start mt-4 flex justify-between">
          <div>
            <h1 className="text-2xl  font-bold ">{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p className="text-sm my-1 ">
              {areaName} {locality}, {city}
            </p>

            <p className="text-xs my-1 ">{message}</p>

            <p className="font-bold text-md my-4 ">
              {deliveryTime} mins | {costForTwoMessage}
            </p>
          </div>

          <div className="my-3">
            <h4 className=" p-1 bg-green-600 rounded-md text-white">
              {avgRating} ⭐
            </h4>
            <p className="text-xs">{totalRatings}+ ratings</p>
          </div>
        </div>

        <hr></hr>

        {categories.map((category, index) => (
          <RestaurantCategories
            key={category.card.card.title}
            data={category.card.card}
            click={index === click}
            setClick={() => setClick(index === click ? null : index)}
          />
        ))}
      </div>
    </>
  );
}

export default RestrauntMenu;
