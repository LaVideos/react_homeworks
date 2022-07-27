import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "../../redux";

const CarFormComponent = () => {

    const {updateCar} = useSelector(state => state.arr);

    const dispatch = useDispatch();

    const {reset, register, setValue, handleSubmit, formState: {errors}} = useForm({mode: 'all'});

    const submit = async (data)=>{
        if(updateCar){
            await dispatch(Actions.updateCar({car:data,id:updateCar.id}));
        }else {
            await dispatch(Actions.createCar({car:data}));
        }
        reset();
    }

    useEffect(()=>{
       if(updateCar){
           setValue('model',updateCar.model)
           setValue('price',updateCar.price)
           setValue('year',updateCar.year)
       }
    },[updateCar])


    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={'model'} {...register('model',{
                        required:true,
                        pattern:new RegExp(/^[a-zA-ZА-яіІїЇєЄ]{1,20}$/)
                    })}/>
                    <input type="number" placeholder={'price'} {...register('price',{
                        required:true,
                        min:1,
                        max:1000000
                    })}/>
                    <input type="number" placeholder={'year'} {...register('year',{
                        required:true,
                        min:1990,
                        max:new Date().getFullYear()
                    })}/>

                    <button>{updateCar?'Update':'Send'}</button>
                </form>
            </div>

            <div style={{background:'yellow',color:'red'}}>
                {errors.model&&<div>Error in model</div>}
                {errors.price&&<div>Error in price</div>}
                {errors.year&&<div>Error in year</div>}
            </div>

        </div>
    );
};

export default CarFormComponent;