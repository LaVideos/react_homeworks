
// 1. Описати всю сім'ю сімпсонів (5 персонажів)
//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів

import './CharacterStyle.css'

function ComponentsSimpsons(props){
    const {name, surname,age,desc,image} = props
    return(
        <div className='character'>
            <h2>{name}</h2>
            <p>{surname}</p>
            <div>{age}</div>
            <p>{desc}</p>
            <img src={image} alt='' className='imageOfCharacter'/>
        </div>
    )
}

export default ComponentsSimpsons