import { act } from "react-dom/test-utils";

export const authReducer = (state, action) => {

    switch(action.type){
        case 'USER_LOGGED_IN': 
        return action.user
        case 'USER_LOGGED_OUT': 
        return null
        default: 
        return state

    }

}