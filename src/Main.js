import React from "react";
import "./App.css";
import { Switch, Route, NavLink, Link, useRouteMatch, BrowserRouter as Router } from "react-router-dom";


function Main(props) {
  return (
    <div>
      <Header />
      <Content bookFactory={props.bookFactory} />
    </div>
  );
}
const Content = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          {/* <Products bookFactory={props.bookFactory} /> */}
          <Products/>
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/add-book">
          <AddBook />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};
const Header = () => {
  return (
    <Router>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/add-book">
            Add Book
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/company">
            Company
          </NavLink>
        </li>
      </ul>
    </Router>
  );
};

const Home = () => {
  return <div> Home </div>;
};

const Products = (/* { bookFactory } */) => {
  console.log(bookFactory.getBooks());
  let match = useRouteMatch();
  return (
    <div>
      <h3> products </h3>
      {/* <p> amount: {bookFactory.getBooks()}</p> */}
      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>INFO</th>
          </tr>
        </thead>
        <tbody>
          {bookFactory.getBooks().map(book => {
            return (
              <tr>
                <td>
                  <Link to={`${match.url}/${book.id}`}>{book.id}</Link>
                </td>
                <td>{book.title}</td>
                <td>{book.info}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
};

const Company = () => {
  return <div> company </div>;
};
const AddBook = () => {
  return <div> Add book </div>;
};
const NoMatch = () => {
  return <div> is not a matched path </div>;
};
export default Main;
