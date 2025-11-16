import Grocery from "./Body/Grocery"
import Swiggybody from "./Body/Swiggybody"
import Footerdata from "./Footer/Footerdata"
import Main from "./Main/main"
import Navbar from "./Navbar/Navbar"
import Card from "./Restaurantcard/Card"
// import RestaurantList from "./ResturantCard/ResturantList"

import "./Swiggy.css"

const Swiggy = () => {
  return (
    <div id="swiggy">
      <ul>
        <li><Navbar /></li>
        <li><Main /></li>
        <li><Swiggybody /></li>
        <li><Card /></li>
        
        <li>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
            alt="Swiggy App Download"
            className="download-banner"
          />
        </li>

        {/* ✅ Footer added back here */}
        <li><Footerdata /></li>
      </ul>
    </div>
  )
}

export default Swiggy
