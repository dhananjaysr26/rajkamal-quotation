import React, { useState } from 'react';
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
function Header() {
   const [menuClicked, setmenuClicked] = useState(1);

   return (


      <nav className="navBar">
         <label className="logo">Rajkamal BarScan</label>
         <ul className={menuClicked ? "nav__links" : "nav__links active"} >
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">About us</a></li>
            <li><a href="/">Get Quotation</a></li>
            <button>Contact Us</button>
         </ul>
         <div id="menuIcon" onClick={() => { if (menuClicked) { setmenuClicked(0) } else { setmenuClicked(1) } }}>{menuClicked ? <FaBars /> : <FaTimes />}</div>


      </nav>

   )
}

export default Header;
