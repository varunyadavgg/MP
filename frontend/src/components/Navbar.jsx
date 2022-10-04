import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar(){

    return <nav className="navbar bg-dark container">
        <h4><Link className="LINK" to="/">  home</Link></h4>
        <h4><Link className="LINK" to="/events"> events</Link></h4>
        <h4><Link className="LINK" to="/create">  create   </Link></h4>
        
    </nav>
}

export default Navbar;