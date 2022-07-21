import React from 'react';
import {useDispatch} from "react-redux";
import {carAction} from "../../redux";

const CarComponent = ({car}) => {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div style={{background:'black', color:"white", margin:'10px',padding:'10px'}}>
            <div>id : {id}</div>
            <div>Model : {model}</div>
            <div>Price : {price}</div>
            <div>Year : {year}</div>
            <button onClick={()=>dispatch(carAction.setCar4Update(car))}>Update Car</button>
        </div>
    );
};

export default CarComponent;