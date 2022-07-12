import React, {Component} from 'react';
import {Comments, MainLayout, Posts, Users} from "./components";
import {Route, Routes} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route path={'users'} element={<Users/>}/>
                        <Route path={'posts'} element={<Posts/>}/>
                        <Route path={'comments'} element={<Comments/>}/>
                    </Route>
                </Routes>


            </div>
        );
    }
}

export default App;
