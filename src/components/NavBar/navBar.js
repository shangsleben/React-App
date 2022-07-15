import React from 'react';
import './navBar.css';
const NavBar = () => (
  <div class="nav">
    <div class="topnav">
      <a href="#home">Home</a>
      <a class="active" href="#news">User Details</a>
      <a href="#connections">Connections</a>
      <a href="#support">Support</a>
    </div>

    <div class="rightnav">
      <a href="#logout"> Logout</a>
      <a href="#profile">Profile</a>
      <a href="#about">About</a>
    </div>
  </div>
)
export default NavBar;