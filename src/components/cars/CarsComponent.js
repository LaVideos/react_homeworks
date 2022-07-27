import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "../../redux";
import {CarComponent} from "../index";

const CarsComponent = () => {

    const {cars} = useSelector(value=>value.arr);

   const dispatch = useDispatch();

   useEffect(()=>{
       dispatch(Actions.getAll());
   },[])

    return (
        <div>
            {
                cars.map(car=><CarComponent key = {car.id} car = {car} />)
            }
        </div>
    );
};

export default CarsComponent;