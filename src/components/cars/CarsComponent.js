import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CarComponent} from "../index";
import {carAction} from "../../redux";

const CarsComponent = () => {

    const {cars} = useSelector(state=>state.cars);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carAction.getAll());
    },[])

    return (
        <div>
            {cars.map(car=><CarComponent key={car.id} car={car}/>)}
        </div>
    );
};

export default CarsComponent;