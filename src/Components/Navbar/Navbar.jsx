import React from "react";

import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import naeem from '../../assets/naeem.jpg'
import { Link } from "react-router-dom";
const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" src={menu_icon} alt="" onClick={() =>setSidebar(prev=>prev===false?true:false)}  />
        <Link to='/'>
        <img className="logo" src={logo} alt="" /> 
        </Link>

      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="nav-right">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={naeem} alt="" className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
