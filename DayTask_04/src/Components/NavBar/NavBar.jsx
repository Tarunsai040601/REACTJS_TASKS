import React from "react";
import './NavBar.css'
const NavBar = () => {
  return (
    <>
      <div className="Main">
        <div className="heading">
          <h1>ServiceNow</h1>
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default NavBar;
