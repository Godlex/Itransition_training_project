import { authConstants } from "./constants"
const initialState = {name:null,password:null};

export default function authReducer(state = initialState, action) {
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