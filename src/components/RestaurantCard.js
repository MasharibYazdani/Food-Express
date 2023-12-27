import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    restData?.info;

  const { deliveryTime } = restData?.info?.sla;

  return (
    <div className="res-card">
      <img
        className="card-logo"
        alt="image"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
