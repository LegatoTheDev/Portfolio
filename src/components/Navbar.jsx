import {motion} from "framer-motion"
import Sidebar from "./sidebar/Sidebar"
import './navbar.css'



const Navbar = () => {
    return (
    <div className="nav-container">
       <Sidebar/>
       <div className="nav-wrap">
        <ul className="nav-ul">
        <li><a href="#"> LEGATO LLC | <p>Lazarr Johnson</p> </a></li>
            {/* <li><a><img src="/images/Instagram.png"></img></a></li>
            <li><a><img src="/images/behance.png"></img></a></li> */}
            {/* <li><a><img src="/images/25231.png"></img></a></li> */}
            {/* <li><a href="#">About</a></li> */} 
        </ul>
       </div>
    </div>
       
    )
}

export default Navbar
