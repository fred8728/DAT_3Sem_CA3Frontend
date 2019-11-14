import React, { useState, useEffect } from 'react';
import {
BrowserRouter as Router, 
Route, 
Link, 
Switch,
useRouteMatch,
useParams} from "react-router-dom";
import StarWars from "./StarWars";
import Users from "./Users";
import Admins from "./Admin";

const Switches = () => {
    //fetch her måske siden det er parent component til vores 3 fetch sider.
    const [starwars,setStarwars] = useState();
    async function fetchData() {
    fetch('http://localhost:8080/securitystarter/api/info/person/1')
    .then(response=>response.json())
    .then(data=> setStarwars( data )); 
    console.log(starwars);
    }

    useEffect(() => {

        fetchData();
      
      }, []);

    return (
    <Switch>
      <Route path="/starwars">
        <StarWars starwars={starwars}/>
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/admins">
        <Admins />
      </Route>
    </Switch>
    );
  }

  export default Switches;