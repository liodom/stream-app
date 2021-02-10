import { SIGN_IN, SIGN_OUT } from "../action-types";

const INITIAL_STATE = {
  isSignedIn: null,
  isUserId: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log("authReducer => action => ", action);
      return {
        ...state,
        isSignedIn: action.payload.isSignedIn,
        isUserId: action.payload.userId,
      };
    case SIGN_OUT:
      console.log("authReducer => action => ", action);
      return {
        ...state,
        isSignedIn: action.payload.isSignedIn,
        isUserId: null,
      };
    default:
      return state;
  }
};

export default authReducer;
