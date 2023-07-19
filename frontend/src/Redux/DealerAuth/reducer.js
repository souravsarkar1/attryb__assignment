import { DEALERLOGINFAIL, DEALERLOGINREQUEST, DEALERLOGINSUCESSFUL, DEALERSIGNUPFAIL, DEALERSIGNUPREQUEST, DEALERSIGNUPSUCESSFUL } from "./ationTypes";


const initilaSate = {
    isAuthDealer: false,
    isError: false,
    tokenDealer: ""
}

export const reducer = (state = initilaSate, { type, payload }) => {
    switch (type) {
        case DEALERLOGINREQUEST:
            return { ...state, isLoading: true };
        case DEALERLOGINSUCESSFUL:
            return { ...state, isLoading: false, isAuth: true, token: payload };
        case DEALERLOGINFAIL:
            return { ...state, isLoading: false, isError: true };
        case DEALERSIGNUPREQUEST:
            return { ...state, isLoading: true };
        case DEALERSIGNUPSUCESSFUL:
            return { ...state, isLoading: false };
        case DEALERSIGNUPFAIL:
            return { ...state, isLoading: false, isError: true };

        default:
            return state;
    }
}