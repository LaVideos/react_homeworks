import {createAsyncThunk} from "@reduxjs/toolkit";
import {Services} from "../../../services/axios.cars.services";

export const createCar = createAsyncThunk(
    'sliceCar/createCar',
    async ({car})=>{
        const {data} = await Services.create(car);
        return data
    }
)