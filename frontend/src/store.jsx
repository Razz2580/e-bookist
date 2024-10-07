import { combineReducers, createStore } from "redux";
import cartReducer from "./slices/CartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
