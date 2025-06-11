// import { useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams, useResolvedPath } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import { CDN_URL } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
// import { MENU_API } from "../utils/constants";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = info;

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
      <header className="menu-header">
        <div className="menu-header-left">
          <img src={CDN_URL + cloudinaryImageId} alt="Restaurant Info" />
        </div>
        <div className="menu-header-right">
          <div className="top">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
          </div>
          <div className="bottom">
            <h4 className="avg-rating">
              <span
                className="icons"
                style={{
                  position: "relative",
                  top: "2px",
                  marginRight: "3px",
                }}
              >
                <AiOutlineStar />
              </span>
              <span>{avgRating}</span>
            </h4>
            <h4 className="time">
              <span
                className="icons"
                style={{
                  position: "relative",
                  top: "2px",
                  marginRight: "3px",
                }}
              >
                <FiClock />
              </span>
              <span> {deliveryTime} MINS</span>
            </h4>
            <h3>{costForTwoMessage}</h3>
          </div>
        </div>
      </header>

      <div className="menu-main">
        <h2>Menu</h2>
        <h3 className="items">{itemCards.length} items</h3>
        <div className="menu-main-card-container">
          {itemCards.map((item) => (
            <div key={item.card.info.id} className="menu-card">
              <div className="menu-card-left">
                <h2 className="menu-name">{item.card.info.name}</h2>
                <h3 className="menu-price">
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </h3>
                <h4 className="menu-description">
                  {item.card.info.description}
                </h4>
              </div>
              <div className="menu-card-right">
                <img src={CDN_URL + item.card.info.imageId} alt="Menu Info" />
              </div>
            </div>
          ))}

          {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;




// {/* <h1>{name}</h1>
//       <p>
//         {cuisines.join(", ")}-{costForTwoMessage}
//       </p>
//       <h2>Menu</h2> */}
//       <ul>
//         {/* itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name}-{" Rs."}
//             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//           </li>
//         )) */}

//         {itemCards?.length > 0 ? (
//           <ul>
//             {itemCards.map((item) => (
//               <li key={item.card.info.id}>
//                 {item.card.info.name} - Rs.{" "}
//                 {item.card.info.price / 100 ||
//                   item.card.info.defaultPrice / 100}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <h3>No menu items found</h3>
//         )}

//         {/* <li>{itemCards[0].card.info.name}</li> */}
//       </ul>