import React, { Component, useState, useEffect  } from "react"
import {
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    useRouteMatch,
    useParams} from "react-router-dom";
    //nedenunder får vi bare hele endpointet ud som json. Vi vil også gerne have hvert 
    //element ud hver for sig
    const StarWars = ({userz}, props) => {
    console.log(userz); 
        return (
           <div>
               
                   <pre>{JSON.stringify(userz, null, 2)}</pre>
               
           </div>
        );
    };
    
    export default StarWars;