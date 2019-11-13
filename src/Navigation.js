import React, { Component, useState, useEffect  } from "react"
import {
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    useRouteMatch,
    useParams} from "react-router-dom";

    const Navigation = () => {
        return (
            <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">See all users</Link>
          </li>
          <li>
            <Link to="/admins">See all admins</Link>
          </li>
          <li>
            <Link to="/starwars">Starwars</Link>
          </li>
        </ul>
     </nav>
        );
    };
    
    export default Navigation;