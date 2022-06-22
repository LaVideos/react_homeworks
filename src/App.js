import './App.css';
import ComponentsSimpsons from "./componentSimpsons/componentsSimpsons";

function App() {
    return (
        <div>
            <ComponentsSimpsons
            name = {'Bart'}
            surname = {'Simpson'}
            age = {'10'}
            desc = {'some cool text'}
            image = {'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
            />
            <ComponentsSimpsons
                name = {'Lisa'}
                surname = {'Simpson'}
                age = {'8'}
                desc = {'some cool text'}
                image = {'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
            />
            <ComponentsSimpsons
                name = {'Maggie'}
                surname = {'Simpson'}
                age = {'1'}
                desc = {'some cool text'}
                image = {'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
            />
            <ComponentsSimpsons
                name = {'Homer'}
                surname = {'Simpson'}
                age = {'39'}
                desc = {'some cool text'}
                image = {'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
            />
            <ComponentsSimpsons
                name = {'Marge'}
                surname = {'Simpson'}
                age = {'37'}
                desc = {'some cool text'}
                image = {'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}
            />
        </div>
    )
}

export default App;
