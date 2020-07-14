import React, { useState } from "react";
import logo from '../assets/favicon.png';


function Sidebar() {

  const [nav, setNav] = useState ([
    {label: "Home", slug:"/", icon: "icon-home"},
    {label: "Discover", slug:"discover", icon: "icon-ul"},
    {label: "Categories", slug:"categories", icon: "icon-tag"},
    {label: "My Courses", slug:"my-courses", icon: "icon-briefcase"} ,
  ])

  const [currentPage, setCurrentPage] = useState("/")

  let navigation = [];
  for (let i=0; i<nav.length; i++){
navigation.push(
  <li key={"nav-" + i + "-" + nav[i].slug}>
  <a href={nav[i].slug} className={"link noul flex c333" + (currentPage === nav[i].slug ? " on" : "")}>
    <div className={"ico s20 " + nav[i].icon} />
    <h2 className="lbl s20">{nav[i].label}</h2>
  </a>
  </li>
);  
}

  return (
  <div className="sidebar fixed">
    <a href="{nav[i].slug" className="logo">
       <img src={logo} className="bl" />
    </a>
    <ul  className="nav">
    {navigation}
    </ul>

    <div className="updated-course">
      <div className="icon-lamp-bright ico">
        <div className="lbl s15 fontb c333">Updated Courses
          <h2 className="author s13 c777">by Test1</h2>

        </div>
      </div>
  </div>
  </div>
  )
}

export default Sidebar