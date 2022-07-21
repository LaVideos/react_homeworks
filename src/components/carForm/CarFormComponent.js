import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../redux";

const CarFormComponent = () => {

    const {car4Update} = useSelector(state => state.cars);

    const {setValue,register,handleSubmit,reset,formState:{errors}} = useForm({mode:'all'})

    const dispatch = useDispatch();

    useEffect(()=>{
        if(car4Update){
            setValue('model',car4Update.model)
            setValue('price',car4Update.price)
            setValue('year',car4Update.year)
        }
    },[car4Update])

    const submit = async (data) => {
       if(car4Update){
           await dispatch(carAction.updateById({id:car4Update.id, car:data}))
       }else {
           await dispatch(carAction.addCarToArr(data));
           // await dispatch(carAction.addCar());

       }
        reset();
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={'model'} {...register('model',{
                        required:true,
                        pattern: new RegExp(/^[a-zA-ZА-яіІїЇєЄёЁ]{1,20}$/)
                    })}/>
                    <input type="number" placeholder={'year'} {...register('year', {
                        required:true,
                        min:1990,
                        max:new Date().getFullYear()
                    })}/>
                    <input type="number" placeholder={'price'} {...register('price',{
                        required:true,
                        min:1,
                        max:1000000
                    })}/>

                    <button>Send</button>
                </form>
            </div>

            <div style={{color:'red'}}>
                <div>{errors.model && <div>Error in model</div>}</div>
                <div>{errors.year && <div>Error in year</div>}</div>
                <div>{errors.price && <div>Error in price</div>}</div>
            </div>

        </div>
    );
};

export default CarFormComponent;