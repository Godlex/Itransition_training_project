import { authConstants } from "./constants";

const initialAuthState = {
  user: { name: null, email: null, id: null, isLoggedIn: false },
};

export default function authReducer(state = initialAuthState, action) {
  console.log(action.type)
  switch (action.type) {
    case authConstants.SET_USER:
      return {
        ...state,
        user: {
          name: action.name,
          email: action.email,
          id: action.id,
          isLoggedIn: true,
        },
      };
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        user: {
          name: null,
          email: null,
          id: null,
          isLoggedIn: false,
        },
      };
    case authConstants.LOGIN_FAILURE:
      return { ...state };
    case authConstants.REGISTER_FAILURE:
      return { ...state };
    default:
      return state;
  }
}
