import { authConstants } from "./constants";

const initialAuthState = {
  user: { name: null, email: null, id: null, isAuth: false },
};

export default function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case authConstants.SET_USER:
      return {
        ...state,
        user: {
          name: action.name,
          email: action.email,
          id: action.id,
          isAuth: action.isAuth,
        },
      };
    default:
      return state;
  }
}
