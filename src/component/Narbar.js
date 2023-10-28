import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Math magician</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quot">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
