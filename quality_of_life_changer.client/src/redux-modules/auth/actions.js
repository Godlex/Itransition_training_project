import { authConstants } from "./constants";

export function login(username, password) {
  return { type: authConstants.LOGIN_SUCCESS, username, password };
}
export function register(username, password, confirmPassword) {
  return {
    type: authConstants.REGISTER_SUCCESS,
    username,
    password,
    confirmPassword,
  };
}
/*export const setLoading = isLoading => {
  return {
    type: actionType.SET_LOADING,
    isLoading
  };
};
*/
