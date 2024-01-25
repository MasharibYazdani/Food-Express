import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_LINK } from "../utils/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success("1 Item Added !", {
      position: "top-center",
    });
  };

  return (
    <>
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
                  <p className="text-xs mt-2 text-justify">
                    {item.card.info.description}
                  </p>
                </div>
                <div className="w-3/12 p-4">
                  <div>
                    <img
                      className="border border-gray-300 rounded-md"
                      src={IMG_LINK + item.card.info.imageId}
                    />
                  </div>
                  <div>
                    <button
                      className="p-2 bg-red-500 hover:bg-red-600 text-sm rounded-lg text-white"
                      onClick={() => handleAddItem(item)}
                    >
                      Add +{" "}
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
};

export default ItemList;
