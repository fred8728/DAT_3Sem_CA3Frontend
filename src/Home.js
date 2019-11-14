import React, { Component, useState, useEffect  } from "react"
import {
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    useRouteMatch,
    useParams} from "react-router-dom";

    const Home = () => {
        return (
           <div>
               <p>
                   Hello home
               </p>
           </div>
        );
    };
    
    export default Home;