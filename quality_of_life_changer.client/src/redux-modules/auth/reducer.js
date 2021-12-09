import { authConstants } from "./constants"

const initialState = {name:null,password:null};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case authConstants.LOGIN_SUCCESS:
            return{
                name: action.username,
                password: action.password
            }
        case authConstants.LOGIN_FAILURE:
            return {...initialState};
      default:
        return state
    }
}

export function registerReducer(state = initialState,action) {
    switch (action.type) {
        case authConstants.REGISTER_SECCESS:
            return{
                name: action.username,
                password: action.password,
                confirmPassword: action.confirmPassword
            }
        case authConstants.REGISTER_FAILURE:
            return {...initialState};
      default:
        return state
    }
}