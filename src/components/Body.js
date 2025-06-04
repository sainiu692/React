import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // * State variable - Super Powerful variable

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // * Normal JS variable
  // const listOfRestaurants = [
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334475',
  //       name: 'KFC',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '3.8',
  //     },
  //   },
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334476',
  //       name: 'Dominos',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '4.8',
  //     },
  //   },
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334477',
  //       name: 'McDonals',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '4.2',
  //     },
  //   },
  // ];

  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9680035&lng=77.55520659999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   console.log(data);
  //   const json = await data.json();
  //   console.log(
  //     json
  //   );
  //   setListOfRestaurants(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };



  const fetchData = async () => {
  try {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=29.9680035&lng=77.55520659999999&carousel=true&third_party_vendor=1",
      {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          // ❗ You CANNOT set 'User-Agent' or 'Referer' from the browser
        },
      }
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

  console.log("body rendered");

  return (
    <div className="body">
      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="Search restaurants..."
        />
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter-logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} /> */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

        {/* <RestaurantCard resName="KFC" cuisine="chicken, NorthIndian,Asian" />
        <RestaurantCard resName="Dominos" cuisine="pizza, NorthIndian,Asian" />
        <RestaurantCard resName="StarBucks" cuisine="coffee, NorthIndian,Asian" /> */}
      </div>
    </div>
  );
  console.log("body rendered2");
  // above line of code is unreachable because when function returns what said the function will be terminated,
  // so this line of code will never execute
};

console.log("body rendered3");

export default Body;
