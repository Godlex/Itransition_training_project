import { authConstants } from "./constants";

const initialAuthState = {
  login: { name: null, password: null },
  register: { name: null, password: null, confirmPassword: null },
};

export default function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS:
      return {
        login: {
          name: action.username,
          password: action.password,
        },
        register: initialAuthState.register
      };
    case authConstants.REGISTER_SECCESS:
      return {
        register: {
          name: action.username,
          password: action.password,
          confirmPassword: action.confirmPassword
        },
        login: initialAuthState.login    
      };
    case authConstants.LOGIN_FAILURE:
      return { ...initialAuthState };
      case authConstants.REGISTER_FAILURE:
      return { ...initialAuthState };
    default:
      return state;
  }
}
