import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Service} from "../../services";

const initialState = {
    cars:[],
    errors:null,
    car4Update:null,
    addCar:null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
     async (_,{rejectedWithValue})=> {
      try {
          const {data} = await Service.getAllCar();
          return data
      }catch (e){
          return rejectedWithValue(e.response.data);
      }
     }
     )

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id,car},{rejectWithValue}) => {
        try {
            const {data} = await Service.updateOneCar(id,car);

            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const addCar = createAsyncThunk(
    'carSlice/addCar',
    async (car,{rejectWithValue})=>{
        try {
            const {data} = await Service.create(car);
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const carsSlice = createSlice({
    name:'carsSlice',
    initialState,
    reducers:{
        setCar4Update:(state, action)=>{
            state.car4Update = action.payload
        },
        addCarToArr:(state, action)=>{
            state.addCar = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getAll.fulfilled,(state, action) => {
            state.errors = null;
            state.cars = action.payload;
        })
            .addCase(getAll.rejected,(state, action) => {
                state.errors = action.payload;
            })
            .addCase(updateById.fulfilled,(state, action)=>{
             const currentCar = state.cars.find(value=>value.id === action.payload.id);
             Object.assign(currentCar,action.payload);
             state.car4Update = null
            })
            .addCase(addCar.fulfilled,(state, action)=>{
                state.cars = action.payload
            })
    }
});

const {reducer:carReducer,actions:{setCar4Update,addCarToArr}} = carsSlice;

const carAction = {
    getAll,
    setCar4Update,
    addCarToArr,
    updateById,
    addCar
}

export {
    carReducer,
    carAction
}

