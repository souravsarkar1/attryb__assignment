import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as userAuthReducer } from "./UserAuth/reducer";
import { reducer as dealerAuthReducer } from "./DealerAuth/reducer";
import { reducer as carDataForMarketPlaceReducer } from "./MarketPlace/reducer";
import { reducer as dealerReducer } from "./DelarReducer/reducer";
const rootReducer = combineReducers({
    userAuthReducer, dealerAuthReducer, carDataForMarketPlaceReducer,dealerReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


