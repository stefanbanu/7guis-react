export const flightTypes = {
  ONE_WAY: "one-way",
  TWO_WAY: "two-way"
};

export let initialState = {
  flightType: flightTypes.ONE_WAY,
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString()
};

const actionTypes = {
  changeFlightType: "CHANGE_FLIGHT_TYPE",
  changeStartDate: "CHANGE_START_DATE",
  changeEndDate: "CHANGE_END_DATE",
  submitFormValues: "SUBMIT_FORM_VALUES"
};

export const actions = {
  changeFlightType: newFlightType => {
    return {
      type: actionTypes.changeFlightType,
      payload: newFlightType
    };
  },
  changeStartDate: newStartDate => {
    return {
      type: actionTypes.changeStartDate,
      payload: newStartDate
    };
  },
  changeEndDate: newEndDate => {
    return {
      type: actionTypes.changeEndDate,
      payload: newEndDate
    };
  },
  submitFormValues: formValues => {
    return {
      type: actionTypes.submitFormValues,
      payload: formValues
    };
  }
};

// actions.submitFormValues()

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.changeFlightType:
      return {
        ...state,
        flightType: action.payload
      };

    case actionTypes.changeStartDate:
      return {
        ...state,
        startDate: action.payload
      };

    case actionTypes.changeEndDate:
      if (state.flightType === flightTypes.TWO_WAY) {
        return {
          ...state,
          endDate: action.payload
        };
      }
      console.log("endDate");
      return state;

    default:
      return state;
  }
};
