import React, { Component, useState, useEffect  } from "react"
import {
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    useRouteMatch,
    useParams} from "react-router-dom";

    const StarWars = () => {
        return (
           <div>
               <p>
                   Hello SW
               </p>
           </div>
        );
    };
    
    export default StarWars;