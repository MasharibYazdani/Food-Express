import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    restData?.info;

  const { deliveryTime } = restData?.info?.sla;

  return (
    <div className="m-5 p-3 h-[500] w-56 shadow-lg rounded-md bg-cyan-100 border border-blue-300 hover:border-black transition">
      <img
        className="w-52 rounded-md h-56 border border-slate-300 mb-2"
        alt="image"
        src={CDN_LINK + cloudinaryImageId}
      />

      <h3 className="font-bold my-2">{name}</h3>
      <h4 className="inline px-1 py-1 bg-green-600 rounded-md text-white">
        {avgRating} ⭐
      </h4>
      <h4 className="italic my-2">{cuisines.join(", ")}</h4>

      <h4 className="font-serif">{costForTwo}</h4>
      <h4 className="my-1">{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
