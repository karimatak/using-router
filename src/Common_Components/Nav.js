import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <Link to="/">
            <h1>Logo</h1>
        </Link>
        <ul className="links">
            <Link to="/events">
                <li>Events</li>
            </Link>
            <Link to="/countries">
                <li>Countries</li>
            </Link>
            <Link to="/continents">
                <li>Continents</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
