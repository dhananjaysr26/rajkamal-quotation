import React from 'react';
import "./Header.css";
function Header() {
    return (
        <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <input type="checkbox" id="active"/>
      <label for="active" className="menu-btn"><i className="fas fa-bars"></i></label>
      <div className="wrapper">
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
         </ul>
      </div>
      </div>


    )
}

export default Header;
