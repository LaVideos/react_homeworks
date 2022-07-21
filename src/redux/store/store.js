import {combineReducers} from "redux";

import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "../slices/slices.cars";

const combineReducer = combineReducers({
    cars: carReducer});

const store = configureStore({
    reducer:combineReducer
})

export {
    store
}