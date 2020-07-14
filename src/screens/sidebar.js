import React from "react";
import logo from '../assets/favicon.png';


function Sidebar() {
  return (
  <div className="sidebar fixed">
    <a href="#" className="logo">
       <img src={logo} className="bl" />
    </a>
    <ul  className="nav">
      <li>
      <a href="#" className="link noul flex c333">
        <div className="ico icon-home" />
        <h2 className="lbl s25">Home</h2>
      </a>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar