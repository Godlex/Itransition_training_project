import { authConstants } from "./constants";

export function login(email, password) {
  return { type: authConstants.LOGIN_SUCCESS, email, password };
}
export function register(username,email, password) {
  return {
    type: authConstants.REGISTER_SUCCESS,
    username,
    email,
    password,
  };
}
export function setUser(id, name, email) {
  return {
    type: authConstants.SET_USER,
    id,
    name,
    email,
  };
}

