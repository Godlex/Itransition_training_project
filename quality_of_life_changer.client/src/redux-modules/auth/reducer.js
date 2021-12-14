import { authConstants } from "./constants";

const initialAuthState = {
  user: {name:null,email:null,id:null}
};

export default function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case authConstants.SET_USER:
      return {
        ...state,
        user:{
          name: action.name,
          email: action.email,
          id: action.id
        }
      };
    case authConstants.LOGIN_FAILURE:
      return { ...state };
    case authConstants.REGISTER_FAILURE:
      return { ...state };
    default:
      return state;
  }
}
