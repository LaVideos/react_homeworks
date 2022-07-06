import './App.css';
import {Link, Route,Routes} from "react-router-dom";
import {AboutPage, ContentPage, AlbumsPage, HomePage, TodosPage, PostPage, CommentsPage} from "./components";

function App() {
    return(
        <div>
            <div><h2>Menu</h2>
                <ul>
                    <li><Link to={'/'}>Main Page</Link></li>
                    <li><Link to={'/Content'}>Content</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
            </div>

            <div>
                <h3>Data</h3>
                <Routes>
                    <Route path={'/'} element = {<HomePage/>} />
                    <Route path={'/Content'} element = {<ContentPage/>}>
                        <Route path={'albums'} element = {<AlbumsPage/>}/>
                        <Route path={'posts'} element = {<PostPage/>}>
                            <Route path={':id'} element = {<CommentsPage/>}/>
                        </Route>
                        <Route path={'todos'} element = {<TodosPage/>}/>
                    </Route>
                    <Route path={'/about'} element = {<AboutPage/>} />
                </Routes>
            </div>


        </div>
    )
}

export default App;