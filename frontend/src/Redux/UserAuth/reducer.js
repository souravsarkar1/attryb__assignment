import { USERLOGINFAIL, USERLOGINREQUEST, USERLOGINSUCESSFUL, USERSIGNUPFAIL, USERSIGNUPREQUEST, USERSIGNUPSUCESSFUL } from "./ationTypes";



const initilaSate = {
    isAuth: false,
    isError: false,
    token: ""
}

export const reducer = (state = initilaSate, { type, payload }) => {
    switch (type) {
        case USERLOGINREQUEST:
            return { ...state, isLoading: true };
        case USERLOGINSUCESSFUL:
            return { ...state, isLoading: false, isAuth: true, token: payload };
        case USERLOGINFAIL:
            return { ...state, isLoading: false, isError: true };
        case USERSIGNUPREQUEST:
            return { ...state, isLoading: true };
        case USERSIGNUPSUCESSFUL:
            return { ...state, isLoading: false };
        case USERSIGNUPFAIL:
            return { ...state, isLoading: false, isError: true };

        default:
            return state;
    }
}