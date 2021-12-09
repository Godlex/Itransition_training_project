import { authConstants } from "./constants"

const initialAuthState = {name:null,password:null};
const initialRegisterState = {name:null,password:null,confirmPassword:null};

export function authReducer(state = initialAuthState, action) {
    switch (action.type) {
        case authConstants.LOGIN_SUCCESS:
            return{
                name: action.username,
                password: action.password
            }
        case authConstants.LOGIN_FAILURE:
            return {...initialAuthState};
      default:
        return state
    }
}

export function registerReducer(state = initialRegisterState,action) {
    switch (action.type) {
        case authConstants.REGISTER_SECCESS:
            return{
                name: action.username,
                password: action.password,
                confirmPassword: action.confirmPassword
            }
        case authConstants.REGISTER_FAILURE:
            return {...initialRegisterState};
      default:
        return state
    }
}