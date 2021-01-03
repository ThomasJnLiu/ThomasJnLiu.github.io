import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link to="/About">Projects</Link>
      </li>
      <li>
        <Link to="/About">Résumé</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
