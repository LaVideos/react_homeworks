import React from 'react';

const ComponentOfSpaceX = (props) => {
    const {mission_name,launch_year,mission_patch_small} = props;
    if(launch_year !== '2020'){ // як через мап відразу передати необхідне, чи такий спосіб єдиний вірний
        // якщо ні - то яким ще чином можна виконати завдання
    return (
        <div>
            <h3>{mission_name}</h3>
            <div>{launch_year}</div>
            <img src={mission_patch_small} alt=""/>
        </div>
    )}
};

export default ComponentOfSpaceX;