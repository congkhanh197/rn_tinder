import * as C from "../constants";

const initialState = {
  info: [],
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.GET_PERSON_INFO_REQUEST:
      return { ...state, loading: true };
    case C.GET_PERSON_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        info: [payload]
      };
    case C.GET_PERSON_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
