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
    //koden virker ikke hvis man logger ind på http://localhost:3000/starwars, 
    //det skal være uden /starwars , måske skal man også lige vente 5 sek(?)
    const StarWars = ({starwars}, props) => {
        let match = useRouteMatch();
    console.log(starwars);
    //console.log(starwars.name); 
        return (
           <div>
               <ul>
                   <li>
                        <pre>{JSON.stringify(starwars, null, 2)}</pre>
                   </li>
                   <li>
                        Name:{JSON.stringify(starwars.name)}
                   </li>
                </ul>
           </div>
        );
    };
    
    export default StarWars;