import {createAsyncThunk} from "@reduxjs/toolkit";
import {Services} from "../../../services/axios.cars.services";


export const updateCar = createAsyncThunk(
    'sliceCar/updateCar',
    async ({car,id})=>{
        const {data} = await Services.update(car,id);
        return data
    }
)