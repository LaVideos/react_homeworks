import {createAsyncThunk} from "@reduxjs/toolkit";
import {Services} from "../../../services/axios.cars.services";

export const deleteCar = createAsyncThunk(
    'sliceCar/deleteCar',
    async ({id}) =>{
        await Services.delete(id)
        return id
    }
)