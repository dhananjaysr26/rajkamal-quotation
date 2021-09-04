import React, { useState } from 'react';
import "./Header.css";
import { FaBars } from "react-icons/fa";
function Header() {
   <script
      src="https://code.jquery.com/jquery-3.6.0.js"></script>
   var hide = {
      left: "-100%"
   }
   var show = {
      left: "0"
   }
   var ABC = hide;
   return (


      <nav className="navBar">
         <label className="logo">Rajkamal BarScan</label>
         <ul className="nav__links" style={ABC}>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">About us</a></li>
            <li><a href="/">Get Quotation</a></li>
            <button>Contact Us</button>
         </ul>
         <i id="menuIcon" onClick={() => { alert("HI"); }}><FaBars /></i>


      </nav>

   )
}

export default Header;