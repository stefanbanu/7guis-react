import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { actions, reducer, initialState } from "./state";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log("test");
  return (
    <div>
      <h1>Choose Flight</h1>
      <select id="flight">
        <option>one-way</option>
        <option>two-way</option>
      </select>
      <br />
      <br />
      <label>Start Date</label>
      <br />
      <input type="date" />
      <br />
      <label>End Date</label>
      <br />
      <input type="date" />
      <br />
      <button type="submit">Submit</button>
    </div>
  );
}

export default App;
