// Swiggybody.jsx
import "./body.css";
import Cartlist from "./Cartlist";
import Itemlist from "./Itemlist";   // import Itemlist, not Grocery

const Swiggybody = () => {
  return (
    <div id="main">
        <ul>
      <li id="firstmain">
        <Cartlist /></li>
        <li>
            <h3>Shop from Swiggy Instamart</h3>
        <Itemlist />   </li>
        </ul>
      
    </div>
  );
};

export default Swiggybody;
