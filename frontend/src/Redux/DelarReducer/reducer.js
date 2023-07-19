import { DEALERADDCARFAIL, DEALERADDCARREQUEST, DEALERADDCARSUCESSFUL, DEALERDELETECARFAIL, DEALERDELETECARREQUEST, DEALERDELETECARSUCESSFUL, DEALERFETCARFAIL, DEALERFETCARREQUEST, DEALERFETCARSUCESSFUL, DEALERGETDETEALSCARFAIL, DEALERGETDETEALSCARREQUEST, DEALERGETDETEALSCARSUCESSFUL, DEALERUPDATENEWVALUECARFAIL, DEALERUPDATENEWVALUECARREQUEST, DEALERUPDATENEWVALUECARSUCESSFUL } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    dealerData: [],
    detealsData: []
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case DEALERADDCARREQUEST:
            return { ...state, isLoading: true };
        case DEALERADDCARSUCESSFUL:
            return { ...state, isLoading: false };
        case DEALERADDCARFAIL:
            return { ...state, isLoading: false, isError: true }
        case DEALERFETCARREQUEST:
            return { ...state, isLoading: true };
        case DEALERFETCARSUCESSFUL:
            return { ...state, isLoading: false, dealerData: payload };
        case DEALERFETCARFAIL:
            return { ...state, isLoading: false, isError: true };
        case DEALERDELETECARREQUEST:
            return { ...state, isLoading: true };
        case DEALERDELETECARSUCESSFUL:
            return { ...state, isLoading: false };
        case DEALERDELETECARFAIL:
            return { ...state, isLoading: false, isError: true };
        case DEALERUPDATENEWVALUECARREQUEST:
            return { ...state, isLoading: true };
        case DEALERUPDATENEWVALUECARSUCESSFUL:
            return { ...state, isLoading: false };
        case DEALERUPDATENEWVALUECARFAIL:
            return { ...state, isLoading: false, isError: true };
        case DEALERGETDETEALSCARREQUEST:
            return { ...state, isLoading: true };
        case DEALERGETDETEALSCARSUCESSFUL:
            return { ...state, isLoading: false, detealsData: payload };
        case DEALERGETDETEALSCARFAIL:
            return { ...state, isLoading: false, isError: true };
        default:
            return { ...state }
    }
}