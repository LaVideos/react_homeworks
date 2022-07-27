import {combineReducers} from "redux";
import {reducerCar} from "../slices/slices";
import {configureStore} from "@reduxjs/toolkit";


const combine = combineReducers({
    arr:reducerCar
});

const store = configureStore({
    reducer:combine
})

export {
    store
}