import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { actions, reducer, initialState, flightTypes } from "./state";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const dateNotValid = state.startDate > state.endDate;

  return (
    <div>
      <h1>Choose Flight</h1>
      <select
        id="flight"
        onChange={event =>
          dispatch(actions.changeFlightType(event.target.value))
        }
      >
        <option>one-way</option>
        <option>two-way</option>
      </select>
      <br />
      <br />
      <label>Start Date</label>
      <br />
      <input
        type="date"
        onChange={event =>
          dispatch(actions.changeStartDate(event.target.value))
        }
      />
      <br />
      <label>End Date</label>
      <br />
      <input
        style={dateNotValid ? { color: "red" } : { color: null }}
        id="endDate"
        type="date"
        disabled={state.flightType === flightTypes.ONE_WAY}
        onChange={event => dispatch(actions.changeEndDate(event.target.value))}
      />
      <br />
      <button type="submit" disabled={dateNotValid}>
        Submit
      </button>
    </div>
  );
}

export default App;
