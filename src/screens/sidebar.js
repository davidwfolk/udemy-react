import React from "react";
import logo from '../assets/favicon.png';


function Sidebar() {
  return (
  <div className="sidebar fixed">
    <a href="#" className="logo">
       <img src={logo} className="bl" />
    </a>
  </div>
  )
}

export default Sidebar