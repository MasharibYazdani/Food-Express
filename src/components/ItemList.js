import { IMG_LINK } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.card.info.id}>
            <div className="flex justify-between my-4 p-4 border-gray-200 border-b-2">
              <div className="text-left p-2 w-9/12">
                <p className="text-sm font-bold">{item.card.info.name}</p>
                <p className="text-sm mt-2">
                  ₹{" "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </p>
                <p className="text-xs mt-2">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button className="p-2 bg-black text-white text-sm mx-8 mt-20 rounded-lg ">
                    Add +{" "}
                  </button>
                </div>

                <div>
                  <img
                    className="border border-gray-300 rounded-md"
                    src={IMG_LINK + item.card.info.imageId}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
