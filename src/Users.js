import React, { Component, useState, useEffect  } from "react"
import {
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    useRouteMatch,
    useParams} from "react-router-dom";

    const Users = () => {
        return (
           <div>
               <p>
                   Hello users
               </p>
           </div>
        );
    };
    
    export default Users;