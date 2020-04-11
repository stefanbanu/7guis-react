import React, { useEffect } from "react";
import { reducer, actions, initialState } from "./timerState";
// 1.state
// 2. hooking up to react
function Timer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log(state);
  useEffect(()=>{
    setInterval(() => {
      dispatch(actions.changeElapsedTime)
    }, 100);
  },[])

  return (
    <div>
      <label></label>
    </div>
  );
}

export default Timer;
