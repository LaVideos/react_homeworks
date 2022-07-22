import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {Service} from "../../services";

const initialState = {
    cars: [],
    errors: null,
    car4Update: null,
    addCar: null,
    deleteCar: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await Service.getAllCar();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await Service.updateOneCar(id, car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const addCar = createAsyncThunk(
    'carSlice/addCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await Service.create(car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async (id, {rejectedWithValue}) => {
        try {
            await Service.deleteCarById(id)
            return id
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCar4Update: (state, action) => {
            state.car4Update = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null;
                state.cars = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload;
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const currentCar = state.cars.find(value => value.id === action.payload.id);
                Object.assign(currentCar, action.payload);
                state.car4Update = null
            })
            .addCase(addCar.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
              const index =  state.cars.findIndex(value => value.id === action.payload);
              state.cars.splice(index,1);
            })
    }
});

const {reducer: carReducer, actions: {setCar4Update, deleteById}} = carsSlice;

const carAction = {
    getAll,
    setCar4Update,
    updateById,
    deleteById,
    addCar,
    deleteCar
}

export {
    carReducer,
    carAction
}

