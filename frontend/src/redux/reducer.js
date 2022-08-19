import { combineReducers } from "@reduxjs/toolkit";
import orderReducer from './order/orderreducer'

const rootReducer = combineReducers({
    order: orderReducer,
});

export default rootReducer;
