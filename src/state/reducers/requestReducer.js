import initialState from "../store/initialState";

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_REQUESTS":
      return {
        ...state,
        requests: action.payload.requests,
      };
    case "SET_SELECTED_REQUEST":
    return {
      ...state,
      selectedRequest: action.payload.request,
    };
    default:
      return state;
  }
};

export default requestReducer;
