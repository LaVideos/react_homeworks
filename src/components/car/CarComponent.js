import React from 'react';
import {useDispatch} from "react-redux";
import {Actions} from "../../redux";

const CarComponent = ({car}) => {

    const dispatch = useDispatch();

    const {id,model,price,year} = car;


    return (
        <div style={{background:'black', color:'white', margin:'20px', padding:'10px'}}>

            <div>
                <div>id:{id}</div>
                <div>model:{model}</div>
                <div>price:{price}</div>
                <div>year:{year}</div>
            </div>

            <div>
                <button onClick={()=>{
                    dispatch(Actions.getCar4Update(car ))
                }} >Edit</button>
                <button onClick={()=>{
                    dispatch(Actions.deleteCar({id}))
                }}>Delete</button>
            </div>

        </div>
    );
};

export default CarComponent;