// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів

import './RickAndAMortyStyle.css'

function RickAndMorty(props){

    const {id,name,status,species,gender,image} = props

    return(
        <div className='character'>
            <div className='textBio'>
                <h2>{id}</h2>
                <h3>{name}</h3>
                <div>{status}</div>
                <p>{species}</p>
                <div>{gender}</div>
            </div>
            <img src={image} alt=""/>
        </div>
    )

}

export default RickAndMorty