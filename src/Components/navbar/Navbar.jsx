import "./Navbar.css"
//import "../navmini/navbar1.css"
import { FaBars} from "react-icons/fa";

function Navbar(){

    return ( 

        <nav className="navbar">
        <header className="navigation">
            <h3>logo</h3>
            <ul className="nav-links">
              <li><a href="/#">HOME</a></li>
              <li><a href="/#">VIDEO</a></li>
              <li><a href="/#">POST</a></li>
              <li><a href="/#">UPLOAD</a></li>

            <button>
            <FaBars/>
            </button>

            </ul>

        </header>
        </nav>

     );

}

export default Navbar;