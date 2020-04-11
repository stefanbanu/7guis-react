import React from "react";
import {
  reducer,
  actions,
  initialState,
  flightTypes,
} from "./flightBookerState";

function FlightBooker() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  let isFormValid;

  if (state.flightType === flightTypes.ONE_WAY) {
    isFormValid = !!state.startDate;
  } else {
    isFormValid =
      !!state.startDate && !!state.endDate && state.startDate <= state.endDate;
  }

  return (
    <div>
      <h1>Choose Flight</h1>
      <select
        id="flight"
        onChange={(event) =>
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
        onChange={(event) =>
          dispatch(actions.changeStartDate(event.target.value))
        }
        value={state.startDate}
      />
      <br />
      <label>End Date</label>
      <br />
      <input
        style={{
          color: isFormValid ? null : "red",
        }}
        value={state.endDate}
        id="endDate"
        type="date"
        disabled={state.flightType === flightTypes.ONE_WAY}
        onChange={(event) =>
          dispatch(actions.changeEndDate(event.target.value))
        }
      />
      <br />
      <button
        onClick={() => {
          if (state.flightType === flightTypes.ONE_WAY) {
            alert(
              `You have booked a ${state.flightType} flight on ${state.startDate}`
            );
          } else {
            alert(
              `You have booked a ${state.flightType} flight from ${state.startDate} to ${state.endDate}`
            );
          }
        }}
        type="submit"
        disabled={isFormValid === false}
      >
        Book
      </button>
    </div>
  );
}

export default FlightBooker;
