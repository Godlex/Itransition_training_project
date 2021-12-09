import { authConstants } from "./constants";

const initialAuthState = {
  login: { name: null, password: null },
  register: { name: null, password: null, confirmPassword: null },
};

export default function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    /*case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          name: action.username,
          password: action.password,
        },
      };*/
    case authConstants.REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          name: action.username,
          password: action.password,
          confirmPassword: action.confirmPassword,
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
