import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

function RestrauntMenu() {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);

      const jsonData = await data.json();

      setResMenu(jsonData);

      console.log(jsonData);
    } catch (error) {
      console.log("Error while loading particular restaurant : " + error);
    }
  };

  if (resMenu === null) {
    return <ShimmerUI />;
  }

  const { name, areaName, cuisines, avgRating, costForTwoMessage } =
    resMenu?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards);

  return (
    <>
      <h1>{name}</h1>
      <h4>Rating - {avgRating} </h4>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      <p>{areaName}</p>

      <h2 style={{ textAlign: "center" }}>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((item) => {
            return (
              <div className="menu-cont" key={item?.card?.info?.id}>
                <div className="menu-name">
                  {item?.card?.info?.name} - ₹ {item?.card?.info?.price / 100}{" "}
                </div>
                <br /> <br /> <br /> <br />
                <div className="menu-img">
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                      item?.card?.info?.imageId
                    }
                  />
                </div>
              </div>
            );
          })}
      </ul>
    </>
  );
}

export default RestrauntMenu;
