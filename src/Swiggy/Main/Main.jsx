import CartFirst from "./CartFirst"
import "./main.css"

const Main1 = () => {
  return (
    <div id="main">
        <div id="img">
      <div id="img1">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="left_img"
        />
      </div>
      <div id="img2">
            <img 
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
              alt="right_img"></img>
      </div>
      </div>

      <div id="maincart-wrapper">
        <div id="maincart">
          <div id="main1">
            <p>Order food & groceries. Discover</p>
            <p id="para1">best restaurants. Swiggy it!</p>
          </div>

          <div id="main2">
  <div id="search1">
    <p>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z"
          fill="#FF5200"
        />
      </svg>
    </p>
    <p>
      <input type="text" placeholder="Enter your location" />
    </p>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.372 6.15a1.1 1.1 0 0 0-.117 1.552l7.184 8.355.03.035c.149.173.327.381.504.536.212.186.564.427 1.058.427s.847-.24 1.059-.427c.177-.155.355-.363.504-.536l.03-.035 7.12-8.282a1.1 1.1 0 0 0-1.668-1.434l-7.045 8.194-7.108-8.267a1.1 1.1 0 0 0-1.55-.117" fill="rgba(2, 6, 12, 0.92)" fill-opacity="0.92"></path>
  </div>

  <div id="search2">
    <input type="text" placeholder="Search for restaurant, item or more" />
  </div>
</div>


            <div id="firstcart">
          <CartFirst />
          
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Main1
