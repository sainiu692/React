import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantsMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return;
  <Shimmer />;

  //   const { cuisines,name, costForTwoMessage } =
  //     resInfo?.cards[2]?.card?.card?.info;

  //   It searches the entire cards array using .find(...)
  //  and picks the first item that has a non-null card.card.info object.

  // It’s safer because it doesn’t rely on a fixed index.
  //  Even if the position changes, it still finds the right card

  const info = resInfo?.cards?.find((card) => card?.card?.card?.info)?.card
    ?.card?.info;

  if (!info) return <h2>Restaurant info not found</h2>;

  const { name, cuisines, costForTwoMessage } = info;

  //   const { itemCards } =
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const regularCards = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCardContainer = regularCards?.find((c) => c?.card?.card?.itemCards);

  const itemCards = itemCardContainer?.card?.card?.itemCards;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {/* itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        )) */}

        {itemCards?.length > 0 ? (
          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - Rs.{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </li>
            ))}
          </ul>
        ) : (
          <h3>No menu items found</h3>
        )}

        {/* <li>{itemCards[0].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;
