// import { useState, useEffect } from "react";
// import { DATA_API } from "./constants.js";

// const useAllRestaurantData = () => {
//   const [originalData, setOriginalData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const data = await fetch(DATA_API);

//       const json = await data.json();

//       const rData =
//         json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants;

//       //To handle the error when data is not defined or data is not fetching properly
//       setOriginalData(rData || []);
//       console.log(originalData);
//     } catch (error) {
//       console.log("Error while fetching home page : " + error);
//     }
//   };

//   return originalData;
// };

// export default useAllRestaurantData;
