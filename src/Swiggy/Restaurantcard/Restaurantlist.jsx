import "./Restaurant.css";

const RestaurantList = ({ name, cuisine, price, distance, rating, image, offers }) => {
  const [offer1, offer2, offer3] = offers || [];

  return (
    <div className="restaurant-card">
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />
      <h3>{name}</h3>
      <div id="cartdata">
      <p>{cuisine}</p>
      <p>₹{price} • {distance} km • ⭐{rating}</p>
      </div >
      <div id="offer">
        <div id="headdata">
            <p><img class="sc-bXCLTC hJBKwj" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png" width="26px" height="20px" alt="offer_icon"></img></p>
        <p id="offer1">{offer1}</p>
        <p>+2 more</p>
        </div>
        <p id="offer2">{offer2}</p>
        <p id="offer3">{offer3}</p>
      </div>
    </div>
  );
};

export default RestaurantList;
