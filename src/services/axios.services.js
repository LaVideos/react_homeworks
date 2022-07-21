import axios from "axios";
import {baseURL, urls} from "./axios.const";

const axiosServices = axios.create({baseURL});

export const Service = {
    getAllCar:()=>axiosServices.get(urls.cars).then(value => value),
    updateOneCar:(id,car)=>axiosServices.put(`${urls.cars}/${id}`,car).then(value => value),
    deleteCarById:(id)=>axiosServices.delete(`${urls.cars}/${id}`).then(value => value),
    create:(car)=>axiosServices.post(urls.cars,car).then(value => value)
}