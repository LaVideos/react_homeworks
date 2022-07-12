import React, {Component} from 'react';
import {Link,Outlet} from 'react-router-dom';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <div><Link to={'users'}>Users</Link></div>
                <div><Link to={'posts'}>Posts</Link></div>
                <div><Link to={'comments'}>Comments</Link></div>
                <Outlet/>
            </div>
        );
    }
}

export default MainLayout;