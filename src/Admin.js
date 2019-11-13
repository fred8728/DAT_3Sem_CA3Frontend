import React, { Component, useState, useEffect  } from "react"
import {
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    useRouteMatch,
    useParams} from "react-router-dom";

    const Admin = () => {
        return (
           <div>
               <p>
                   Hello Admin
               </p>
           </div>
        );
    };
    
    export default Admin;