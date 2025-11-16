import Logo from "./logo"
import "./Navbar.css"
import Navlist from "./Navlist"
const Navbar=()=>{
    return(
        <div id="navbar">
           <div> <Logo/></div>
            <div><Navlist/></div>
        </div>
    )
}
export default Navbar