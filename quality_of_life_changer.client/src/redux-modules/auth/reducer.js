import { authConstants } from "./constants";
import { constants } from "../../constants/constants";

const initialAuthState = {
  user: { name: null, email: null, id: null},
};

export default function authReducer(state = initialAuthState, action) {
  console.log(action.type)
  switch (action.type) {
    case authConstants.SET_USER:
      window.location.href = "/";
      return {
        ...state,
        user: {
          name: action.name,
          email: action.email,
          id: action.id,
        },
      };
    case authConstants.LOGOUT_SUCCESS:
      localStorage.removeItem(constants.JWT_TOKEN);
      return {
        ...state,
        user: {
          name: null,
          email: null,
          id: null,
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
