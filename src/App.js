import './App.css';
import RickAndMorty from "./RickAndMorty/RickAndMorty";
import './RickAndMorty/RickAndAMortyStyle.css'

function App() {
    return (
        <div className='allCharacters'>
            <RickAndMorty
                id = '1'
                name = 'Rick Sanchez'
                status = "Alive"
            species = "Human"
            gender = "Male"
            image = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
                <RickAndMorty
                    id = '420'
                    name = 'Plutonian Host'
                    status = 'Alive'
                    species = 'Alien'
                    gender = 'Male'
                    image = 'https://rickandmortyapi.com/api/character/avatar/420.jpeg'
                />
                <RickAndMorty
                    id = '123'
                    name = 'Fat Morty'
                    status = 'Alive'
                    species = 'Human'
                    gender = 'Male'
                    image = 'https://rickandmortyapi.com/api/character/avatar/123.jpeg'
                />
                <RickAndMorty
                    id = '600'
                    name = 'Cats Fan'
                    status = 'Alive'
                    species = 'Alien'
                    gender = 'Female'
                    image = 'https://rickandmortyapi.com/api/character/avatar/600.jpeg'
                />
                <RickAndMorty
                    id = '248'
                    name = 'Mrs. Refrigerator'
                    status = 'Dead'
                    species = 'Alien'
                    gender = 'Female'
                    image = 'https://rickandmortyapi.com/api/character/avatar/248.jpeg'
                />
                <RickAndMorty
                    id = '306'
                    name = 'Scary Terry'
                    status = 'Alive'
                    species = 'Mythological Creature'
                    gender = 'Male'
                    image = 'https://rickandmortyapi.com/api/character/avatar/306.jpeg'
                />
        </div>
    )
}

export default App;
