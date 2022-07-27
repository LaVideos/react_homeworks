import {createAsyncThunk} from "@reduxjs/toolkit";
import {Actions} from "../slices";
import {Services} from "../../../services/axios.cars.services";

export const getAll = createAsyncThunk(
    'sliceCar/getAll',
    async ()=>{
        const {data} = await Services.getAll();
        return data
    }
)

