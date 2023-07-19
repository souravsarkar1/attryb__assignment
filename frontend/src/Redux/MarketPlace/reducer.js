import { GETCARDATAFORMARKETPLACEREQUEST, GETCARDATAFORMARKETPLACERFAIL, GETCARDATAFORMARKETPLACESUCESSFUL } from "./actioTypes";




const initilaSate = {
    isLoading: false,
    isError: false,
    data: []
}

export const reducer = (state = initilaSate, { type, payload }) => {
    switch (type) {
        case GETCARDATAFORMARKETPLACEREQUEST:
            return { ...state, isLoading: true };
        case GETCARDATAFORMARKETPLACESUCESSFUL:
            return { ...state, isLoading: false, data: payload };
        case GETCARDATAFORMARKETPLACERFAIL:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }
}