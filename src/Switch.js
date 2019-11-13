import React, { useState } from 'react';
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
    return (
    <Switch>
      <Route path="/starwars">
        <StarWars />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/admins">
        <Admins />
      </Route>
{/*       <Route path="/">
        <Home />
      </Route> */}
    </Switch>
    );
  }

  export default Switches;