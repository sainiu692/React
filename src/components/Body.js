import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // * State variable - Super Powerful variable

  const [searchText, setSearchText] = useState("");

  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurants = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(restaurants || []);
    setFilteredRestaurants(restaurants || []);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "50px", color: "black" }}>
        Looks like you're offline! Please check your internet connection.
      </h1>
    );
  }


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // console.log(e); // Full event object
            // console.log(e.target); // The <input> element
            // console.log(e.target.value); // The actual string the user typed
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            // filter the restaurant card and update the UI
            console.log(searchText);
            const filtered = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }}
        >
          search
        </button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter-logic
            const topRated = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(topRated);
            // console.log(topRated);
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

        {filteredRestaurants.length === 0 ? (
          <h2>No restaurants found.</h2>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info?.id}
              to={`/restaurants/${restaurant.info?.id}`}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}

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

// console.log("body rendered3");

export default Body;

