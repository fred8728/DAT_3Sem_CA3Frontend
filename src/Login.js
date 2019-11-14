import React, { Component } from "react";
import {
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    useRouteMatch,
    useParams} from "react-router-dom";
import facade from "./apiFacade";

class LogIn extends Component {
    constructor(props) {
      super(props);
      this.state = { username: "", password: "" }
    }
    login = (evt) => {
      evt.preventDefault();
      this.props.login(this.state.username, this.state.password);
    }
    onChange = (evt) => {
      this.setState({ [evt.target.id]: evt.target.value })
    }
  
    render() {
      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={this.login} onChange={this.onChange} >
            <input placeholder="User Name" id="username" />
            <input placeholder="Password" id="password" />
            <button>Login</button>
          </form>
        </div>
      )
    }
  }
  export default LogIn;