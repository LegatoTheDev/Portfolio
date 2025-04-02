import {motion} from "framer-motion"
import Sidebar from "./sidebar/Sidebar"
import './navbar.css'



const Navbar = () => {
    return (
    <div className="nav-container">
       <Sidebar/>
{/*        <img className="legato" src="/images/LEGATO STUDIOS  _  LAZARR JOHNSON  GrAPHIC DESIGNER + FULL STAC.png"></img> */}
       <div className="nav-wrap">
        <ul className="nav-ul">
        <li><a href="#"> LEGATO LLC | Lazarr Johnson </a></li>
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
