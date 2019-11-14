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
    const [userz,setUserz] = useState();
    async function fetchData() {
    fetch('http://localhost:8080/securitystarter/api/info/person/1')
    .then(response=>response.json())
    .then(data=> setUserz( data )); 
    console.log(userz);
    }

    useEffect(() => {

        fetchData();
      
      }, []);

    return (
    <Switch>
      <Route path="/starwars">
        <StarWars userz={userz}/>
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