import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
        setResInfo(null);
      }
    };
    fetchMenu();
  }, [resId]);

  
  const restaurantInfo = resInfo?.cards?.find((card) => card?.card?.card?.info)
    ?.card?.card?.info;

  const regularCards = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCardContainer = regularCards?.find((c) => c?.card?.card?.itemCards);

  const itemCards = itemCardContainer?.card?.card?.itemCards;

  console.log(itemCards);

  return { restaurantInfo, itemCards };
};
export default useRestaurantMenu;
