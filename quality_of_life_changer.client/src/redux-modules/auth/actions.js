import { authConstants } from "./constants";

export function login(username, password) {
  return { type: authConstants.LOGIN_SUCCESS, username, password };
}
export function register(username, password) {
    return { type: authConstants.REGISTER_SUCCESS, username, password };
}
