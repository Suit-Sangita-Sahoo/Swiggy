import RestaurantList from "./Restaurantlist";
import "./Restaurant.css";

const Card = () => {
  const restaurants = [
    {
      name: "Cafe 16",
      cuisine: "Continental, Italian",
      price: 1000,
      distance: 2.1,
      rating: 4.2,
      offers: [
        "Flat 10% off on pre-booking",
        "Up to 10% off with bank offers",
        "Get extra 10% off using BFAST100"
      ],
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/12/2/b2a2e577-39a9-49a8-a3ed-85adc45f2175_image00523d750bbf54bdd8f4403bbc13176dc.JPG"
    },
    {
      name: "Yeti - The Himalayan Kitchen",
      cuisine: "Asian, North Indian",
      price: 1500,
      distance: 3.5,
      rating: 4.1,
      offers: [
        "Flat 10% off on pre-booking",
        "Up to 10% off with bank offers",
        "Get extra 10% off using BFAST100"
      ],
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/4/10/181ed146-adac-4255-bf67-65065e1419b6_20240410T140019780.PNG"
    },
    {
      name: "Sweet Basil - Lyfe Hotel",
      cuisine: "Continental, North Indian",
      price: 2000,
      distance: 2.4,
      rating: 4.8,
      offers: [
        "Flat 10% off on pre-booking",
        "Up to 10% off with bank offers",
        "Get extra 10% off using BFAST100"
      ],
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/6/20/56cb4d08-691d-42f4-9064-078f539c6fac_20240620T143108957.jpg"
    },
    {
      name: "Raasta",
      cuisine: "Asian, North Indian",
      price: 1200,
      distance: 3.0,
      rating: 4.3,
      offers: [
        "Flat 10% off on pre-booking",
        "Up to 10% off with bank offers",
        "Get extra 10% off using BFAST100"
      ],
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/4/8/4f8766af-f2ef-4b57-8571-9d610330b0ae_20240408T043157977.JPG"
    },
    {
      name: "Raasta",
      cuisine: "Asian, North Indian",
      price: 1200,
      distance: 3.0,
      rating: 4.3,
      offers: [
        "Flat 10% off on pre-booking",
        "Up to 10% off with bank offers",
        "Get extra 10% off using BFAST100"
      ],
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/12/2/b2a2e577-39a9-49a8-a3ed-85adc45f2175_image00523d750bbf54bdd8f4403bbc13176dc.JPG"
    },
    {
      name: "Raasta",
      cuisine: "Asian, North Indian",
      price: 1200,
      distance: 3.0,
      rating: 4.3,
      offers: [
        "Flat 10% off on pre-booking",
        "Up to 10% off with bank offers",
        "Get extra 10% off using BFAST100"
      ],
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/6/29/e7793d44-819c-41af-8c91-44ed296cd816_image14f6541e6596c14a3ab5db925064183de8.JPG"
    },
    {
      name: "Raasta",
      cuisine: "Asian, North Indian",
      price: 1200,
      distance: 3.0,
      rating: 4.3,
      offers: [
        "Flat 10% off on pre-booking",
        "Up to 10% off with bank offers",
        "Get extra 10% off using BFAST100"
      ],
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/7/3cb3c7bc-2cb8-402c-9640-700fbf7e09e7_image31ef3a566a6214a1c8a9af3ff2b915dac.JPG"
    }
  ];

  return (
    <div className="card-container">
      {restaurants.map((res) => (
        <RestaurantList
          name={res.name}
          cuisine={res.cuisine}
          price={res.price}
          distance={res.distance}
          rating={res.rating}
          offers={res.offers}
          image={res.image}
        />
      ))}
    </div>
  );
};

export default Card;
