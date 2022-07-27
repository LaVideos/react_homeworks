import {createSlice} from "@reduxjs/toolkit";
import {createCar, deleteCar, getAll, updateCar} from "./fnForSlices";


const initialState = {
    cars:[],
    updateCar:null
}

const sliceCar = createSlice({
    name:'sliceCar',
    initialState,
    reducers:{
        getCar4Update:(state, action)=>{
            state.updateCar = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.cars = action.payload
            })
            .addCase(createCar.fulfilled,(state, action)=>{
                state.cars.push(action.payload)
            })
            .addCase(updateCar.fulfilled,(state, action)=>{
                const current = state.cars.find(value=>value.id === action.payload.id)
                Object.assign(current,action.payload);
                state.updateCar = null
            })
            .addCase(deleteCar.fulfilled,(state, action)=>{
                const index = state.cars.findIndex(value => value.id === action.payload)
                state.cars.splice(index,1);
            })

    }
})


const {reducer:reducerCar,actions:{getCar4Update}} = sliceCar;

const Actions = {
    getCar4Update,
    createCar,
    deleteCar,
    updateCar,
    getAll
}

export {
    reducerCar,
    Actions
}

