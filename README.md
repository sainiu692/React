# Parcel

-Dev Build
-Local Server
-HMR = Hot Module Replacement

- uses file watching algorithms=written in c++

-doing caching=gives faster builds
-image optimization
-minification
-bundling
-compressing
-consistent hashing
-code splitting
-differential bundling=to support older browser
-diagnostic
-error handling
-tree shaking =remove unused code for you
-different dev and production bundles



 <!-- episode 1 and 2 -->

// const heading = React.createElement(
//   "h1",
//   { id: "heading", cyz: "abc" },
//   "hello world from react"
// );

// console.log(heading); // giving object

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {id:"new"}, "I'm in a h1 tag"),
//     React.createElement("h2", {id:"new2"}, "I'm in a h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {id:"new3"}, "I'm in a h1 tag"),
//     React.createElement("h2", {id:"new4"}, "I'm in a h2 tag"),
//   ]),
// ]);

// console.log(parent); // giving object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);




 <!-- episode 3 -->

// const heading = React.createElement("h1", { id: "heading" }, "namste react");
// console.log(heading);

// // using JSX

// // JSX is not a html in JavaScript

// const Title = () => (
//   <h1 id="heading" className="heading" tabIndex="8">
//     namaste react using jsx
//   </h1>
// );
// const Title2 = (
//   <h1 id="heading" className="heading" tabIndex="8">
//     namaste react using jsx
//   </h1>
// );

// const fn = () => true;

// const fn2 = () => {
//   return true;
// };

// // above fn and fn2 are same function

// // React functional component
// const HeadingComponent = () => {
//   return <h1 className="heading">namaste react functional component</h1>;
// };

// // component compositions
// const HeadingComponent2 = () => (
//   <div id="container">
//     <Title />
//     <h1 className="heading2">namaste react functional component</h1>
//   </div>
// );

// // writing javascript in jsx
// const number = 1000;
// const HeadingComponent3 = () => (
//   <div id="container">
//     {number}
//     <h2>{number}</h2>
//     <h1 className="heading2">namaste react functional component</h1>
//   </div>
// );

// //rendering reactElement inside functional compoment
// const HeadingComponent4 = () => (
//   <div id="container">
//     {Title2}
//     <h1 className="heading2">namaste react functional component</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent4 />);


<!-- episode  -->


<!-- food ordering App -->


*/

/** 
 * header 
 * --logo
 * --navigation system
 
 * body 
 * --search
 * --restaurant container
 *   -restaurant card
 *     -image
 *     -name of restaurant
 *     -star rating
 *     -cuisine
 *     -delivery time

 * footer
 * --copyright 
 * --link
 * --address
 * --contact
 */


 import React from "react";
import ReactDOM from "react-dom/client";




<!-- // const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFUQWUr_5SKpmX24mZIWpQAYKj5iCJ9p7fA&s"
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const RestaurantCard = () => {
//   return (
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"
//       />
//       <h3>Meghana Foods</h3>
//       <h4>Biryani,Nort-Indian,Asian</h4>
//       <h4>4.4stars</h4>
//       <h4>38 minutes</h4>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">search</div>
//       <div className="res-container">
//         <RestaurantCard />
//       </div>
//     </div>
//   );
// };

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />); -->

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="app logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFUQWUr_5SKpmX24mZIWpQAYKj5iCJ9p7fA&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId,name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant logo"
        // src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        // resData.info.cloudinaryImageId}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐ ⏱️ 38 mins</h4>
      <h4>{costForTwo}</h4>
      {/* <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}⭐ ⏱️ 38 mins</h4>
      <h4>{resData.info.costForTwo}</h4> */}
    </div>
  );
};
// const resObj={
//   "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//   "info": {
//     "id": "758321",
//     "name": "NIC Ice Creams",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/60c85b05-7755-46bc-a2f5-d66334c74b39_758321.JPG",
//     "locality": "MICO Employees Grinirman",
//     "areaName": "BTM layout",
//     "costForTwo": "₹120 for two",
//     "cuisines": [
//       "Ice Cream",
//       "Desserts"
//     ],
//     "avgRating": 4.6,
//     "veg": true,
//     "parentId": "6249",
//     "avgRatingString": "4.6",
//     "totalRatingsString": "881",
//     "sla": {
//       "deliveryTime": 29,
//       "lastMileTravel": 3.6,
//       "serviceability": "SERVICEABLE",
//       "slaString": "25-30 mins",
//       "lastMileTravelString": "3.6 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-06-02 01:00:00",
//       "opened": true
//     },
//     "badges": {
//       "textExtendedBadges": [
//         {
//           "iconId": "guiltfree/GF_Logo_android_3x",
//           "shortDescription": "brand",
//           "fontColor": "#7E808C"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {},
//         "textBased": {},
//         "textExtendedBadges": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "",
//                 "fontColor": "#7E808C",
//                 "iconId": "guiltfree/GF_Logo_android_3x",
//                 "shortDescription": "brand"
//               }
//             }
//           ]
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "66% OFF",
//       "subHeader": "UPTO ₹126",
//       "headerTypeV2": 12
//     },
//     "orderabilityCommunication": {
//       "title": {},
//       "subTitle": {},
//       "message": {},
//       "customIcon": {}
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {},
//         "video": {}
//       }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {},
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-7c63a8c1-20dc-4eec-acfa-68d94b6d3f58"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/bangalore/nic-ice-creams-mico-employees-grinirman-btm-layout-rest758321",
//     "text": "RESTAURANT_MENU",
//     "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

// };

const resList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "23678",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/f608985c-bfe3-48de-955b-ad47bcf44dc8_23678.JPG",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "64K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-03 04:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7f8d8c11-4e99-466c-a413-6263a78c6d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "263485",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_263485.JPG",
      locality: "Kormangala 8th Block",
      areaName: "Kormangala",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      avgRating: 4.5,
      parentId: "281782",
      avgRatingString: "4.5",
      totalRatingsString: "4.9K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-03 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹94",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7f8d8c11-4e99-466c-a413-6263a78c6d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-8th-block-kormangala-rest263485",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "747259",
      name: "FreshMenu",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/9512e181-b1f7-45b5-9ab0-8b6bc402d666_747259.jpg",
      locality: "EJIPURA",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: [
        "Continental",
        "Chinese",
        "Oriental",
        "Asian",
        "Healthy Food",
        "Fast Food",
        "Indian",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "398",
      avgRatingString: "4.1",
      totalRatingsString: "5.3K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7f8d8c11-4e99-466c-a413-6263a78c6d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/freshmenu-ejipura-koramangala-rest747259",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "944432",
      name: "The Filter Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/22/87c1f839-f566-4b74-af4a-1e071d5dfb5d_944432.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Sweets", "Snacks"],
      avgRating: 4.6,
      veg: true,
      parentId: "21001",
      avgRatingString: "4.6",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.4",
          ratingCount: "414",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7f8d8c11-4e99-466c-a413-6263a78c6d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-filter-coffee-koramangala-rest944432",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "10582",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/20e5816c-78d5-4a1a-bf5f-cd94b7788ab7_10582.JPG",
      locality: "Maruti Nagar",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-03 07:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.9",
          ratingCount: "1.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7f8d8c11-4e99-466c-a413-6263a78c6d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/pizza-hut-maruti-nagar-koramangala-rest10582",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "737964",
      name: "Wow! Momo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/3e9d02e0-9115-4f3e-a727-6d5950aeaf36_737964.jpg",
      locality: "KORAMANGALA LAYOUT EXTENSION",
      areaName: "KORAMANGALA",
      costForTwo: "₹300 for two",
      cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
      avgRating: 3.9,
      parentId: "1776",
      avgRatingString: "3.9",
      totalRatingsString: "929",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-03 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7f8d8c11-4e99-466c-a413-6263a78c6d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/wow-momo-layout-extension-koramangala-rest737964",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "5934",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/6c37bd85-e460-4f35-9a27-ea97d88f4e3a_5934.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "101K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-03 06:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "4.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7f8d8c11-4e99-466c-a413-6263a78c6d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "38634",
      name: "Third Wave Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/23/1fd493e2-cfa4-485a-a61d-4374e7d1ab15_38634.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Beverages", "Bakery", "Continental"],
      avgRating: 4.6,
      parentId: "274773",
      avgRatingString: "4.6",
      totalRatingsString: "6.8K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-02 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹749",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "4.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7f8d8c11-4e99-466c-a413-6263a78c6d23",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/third-wave-coffee-koramangala-rest38634",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="Search restaurants..."
        />
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

        {
          resList.map((restaurant)=>
          <RestaurantCard  key={restaurant.info.id} resData={restaurant}/>
          )
        }

        {/* <RestaurantCard resName="KFC" cuisine="chicken, NorthIndian,Asian" />
        <RestaurantCard resName="Dominos" cuisine="pizza, NorthIndian,Asian" />
        <RestaurantCard resName="StarBucks" cuisine="coffee, NorthIndian,Asian" /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


<!-- episode-5 -->

two  types of import and export

Default Import/Export

export default component;
import component from path;


Named Import/Export

export const component;
import{component} from path



// * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -