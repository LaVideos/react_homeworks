import axios from "axios";

import {baseURL, urls} from "./constants";

const _axios = axios.create({baseURL});

export const Services = {
    getAll:()=>_axios(urls.cars),
    create:(car)=>_axios.post(urls.cars,car),
    update:(car,id)=>_axios.put(`${urls.cars}/${id}`,car),
    delete:(id)=>_axios.delete(`${urls.cars}/${id}`)
}