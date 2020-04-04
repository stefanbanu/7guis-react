export let initialState = {
  elapsedTime: 0,
  duration: 5
};

const actionTypes = {
  changeElapsedTime: "CHANGE_ELAPSED_TIME",
  changeDuration: "CHANGE_DURATION",
  resetTime: "RESET_TIME"
};

export const actions = {
  changeElapsedTime: newElapsedTime => {
    return {
      type: actionTypes.changeElapsedTime,
      payload: newElapsedTime
    };
  },
  changeDuration: newDuration => {
    return {
      type: actionTypes.changeDuration,
      payload: newDuration
    };
  },
  resetTime: newTime => {
    // 0 ?
    return {
      type: actionTypes.resetTime,
      payload: newTime
    };
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.changeElapsedTime:
      return {
        ...state,
        elapsedTime: action.payload
      };

    case actionTypes.changeDuration:
      return {
        ...state,
        duration: action.payload
      };

    case actionTypes.resetTime:
      return {
        ...state,
        resetTime: 000// ?
      };

    default:
      return state;
  }
};
