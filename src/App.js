import React, { Component } from "react";
import {
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    useRouteMatch,
    useParams} from "react-router-dom";
import facade from "./apiFacade";
import Nav from "./Navigation";
import Swi from "./Switch";
import Main from "./Main.js"


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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false }
  }

  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  } //TODO
  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true }));
  } //TODO
  render() {
    return (
      <Router>
        {!this.state.loggedIn ? (<LogIn login={this.login} />) :
          (<div>
            <LoggedIn />
            <button onClick={this.logout}>Logout</button>

            <Nav nav = {Nav}/>
            <Swi switch = {Swi}/>

          </div>)}
      </Router>
    )
  }

}
export default App;

