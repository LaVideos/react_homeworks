// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import {useEffect, useState} from "react";
import ComponentOfSpaceX from "./ComponentOfSpaceX";

const SpaceX =()=>{

    const [infoSpaceX,setInfoSpaceX] = useState([])


    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setInfoSpaceX(value))
    },[]);

    return(

        <div>
            {infoSpaceX.map((info,index)=><ComponentOfSpaceX
                key = {index}
                mission_name = {info.mission_name}
                launch_year={info.launch_year}
                mission_patch_small ={info.links.mission_patch_small}
            />)}
        </div>


    )
}

export default SpaceX;

