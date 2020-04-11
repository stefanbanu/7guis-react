import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { actions, reducer, initialState, flightTypes } from "./state";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Timer from "./timer/timer";
import FlightBooker from "./flightBooker/flightBooker";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/flight-booker">Flight Booker</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/flight-booker">
          <FlightBooker></FlightBooker>
        </Route>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route path="/timer">
          <Timer></Timer>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
