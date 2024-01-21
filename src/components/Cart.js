import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList.js";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-2">
      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 mx-auto">
        <div className="text-end mx-9">
          <button
            className="m-1 p-2 rounded-md bg-black text-white "
            onClick={handleClearCart}
          >
            {" "}
            Clear Cart
          </button>
        </div>

        {cartItems.length === 0 && (
          <h1 className=" mt-10">
            Your cart is empty! Please add items in your cart
          </h1>
        )}

        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
