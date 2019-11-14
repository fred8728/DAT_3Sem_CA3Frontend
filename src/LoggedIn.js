import React, { Component } from "react";
import {
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    useRouteMatch,
    useParams} from "react-router-dom";
import facade from "./apiFacade";

class LoggedIn extends Component {
    constructor(props) {
      super(props);
      this.state = { dataFromServer: "Fetching!!" };
    }
    componentDidMount() {
  
      facade.fetchData().then(res => this.setState({ dataFromServer: res.msg }));
  
      
  
    }
    render() {
      return (
        <div>
          <h2>Data Received from server</h2>
          <h3>{this.state.dataFromServer}</h3>
        </div>
      )
    }
  }