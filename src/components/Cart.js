import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, addItem } from "../utils/cartSlice";
import { IMG_LINK } from "../utils/constants";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    toast.warn("1 Item Removed !", {
      position: "top-center",
    });
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success("1 Item Added !", {
      position: "top-center",
    });
  };

  const calculateTotalPrice = () => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum +=
        (item.quantity * item.card.info.defaultPrice ||
          item.quantity * item.card.info.price) / 100;
    });
    return sum;
  };

  const calculateTotalItmes = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.quantity;
    });

    return count;
  };

  return (
    <>
      <div className="border border-gray-300 bg-cyan-50 min-h-screen">
        <div className="text-center w-6/12 mx-auto mt-4">
          <h1 className="text-3xl font-bold font-serif">Cart</h1>

          <div className="">
            <div className="text-end mx-9">
              <button
                className="m-1 p-2 rounded-md bg-red-500 text-white "
                onClick={handleClearCart}
              >
                {" "}
                Clear Cart
              </button>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <h1 className=" mt-10">
              Your cart is empty! Please add items in your cart
            </h1>
          ) : (
            <div>
              <div className="">
                <h1 className="text-start mx-5 font-semibold">
                  {calculateTotalItmes()} Itmes{" "}
                </h1>
              </div>

              <div>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.card.info.id}>
                      <div className="flex justify-between my-4 p-4 border-gray-200 border-b-2">
                        <div className="text-left p-2 w-9/12">
                          <p className="text-sm font-bold">
                            {item.card.info.name}
                          </p>
                          <p className="text-sm mt-2">
                            ₹{" "}
                            {(item.quantity * item.card.info.price) / 100 ||
                              (item.quantity * item.card.info.defaultPrice) /
                                100}
                          </p>
                          <p className="text-xs mt-2">
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
                          <div className="flex justify-around ">
                            <div>
                              <button
                                className="p-2 w-8 bg-yellow-500 border border-black text-sm rounded-lg "
                                onClick={() => handleAddItem(item)}
                              >
                                +{" "}
                              </button>
                            </div>

                            <div className="p-2">{item.quantity}</div>

                            <div>
                              <button
                                className="p-2 w-8  text-sm rounded-lg bg-yellow-500 border border-black"
                                onClick={() => handleRemoveItem(item)}
                              >
                                –{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Order Summary</h3>
                <div className="flex justify-around m-2">
                  <div>No of Items</div>
                  <div>{calculateTotalItmes()}</div>
                </div>
                <div className="flex justify-around m-2">
                  <div>Total Amount</div>
                  <div>₹ {calculateTotalPrice()}</div>
                </div>

                <button className="m-2 p-2 bg-green-500 text-white rounded-md ">
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Cart;
