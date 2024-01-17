import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);

      const jsonData = await data.json();

      setResMenu(jsonData);
    } catch (error) {
      console.log("Error while loading particular restaurant : " + error);
    }
  };
  return resMenu;
};

export default useRestaurantMenu;
