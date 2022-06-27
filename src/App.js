import './App.css';
import {Posts, Users} from "./components";
import {useState} from "react";

function App() {
    const [user, setUser] = useState(0);
    const getUserId = (value) => setUser(value);

    return (<div>
        <h1>COMMENTS</h1>
        <Posts id = {user.id}/>
        <hr/>
        <hr/>
        <Users getUserId={getUserId}/>
    </div>)
}

export default App;
