export let initialState = {
  elapsedTime: 0,
  duration: 5,
};

const actionTypes = {
  changeElapsedTime: "CHANGE_ELAPSED_TIME",
  changeDuration: "CHANGE_DURATION",
  resetTime: "RESET_TIME",
};

export const actions = {
  changeElapsedTime: {
    type: actionTypes.changeElapsedTime,
  },
  changeDuration: (newDuration) => {
    return {
      type: actionTypes.changeDuration,
      payload: newDuration,
    };
  },
  resetTime: {
    type: actionTypes.resetTime,
    payload: 0,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.changeElapsedTime:
      if (state.elapsedTime < state.duration) {
        return {
          ...state,
          elapsedTime: state.elapsedTime + 0.1,
        };
      }
      return state;

    case actionTypes.changeDuration:
      return {
        ...state,
        duration: action.payload,
      };

    case actionTypes.resetTime:
      return {
        ...state,
        resetTime: action.payload,
      };

    default:
      return state;
  }
};
