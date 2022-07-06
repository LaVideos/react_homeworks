import React from 'react';
import {ContentComponent} from "../../components";
import {Link, Outlet} from "react-router-dom";

const ContentPage = () => {
    return (
        <div>
            <div>
                <ContentComponent/>
                <ul>
                    <li><Link to={'todos'}>Todos</Link></li>
                    <li><Link to={'albums'}>Albums</Link></li>
                    <li><Link to={'posts'}>Post</Link></li>
                </ul>
            </div>
            <Outlet/>
        </div>
    );
};

export default ContentPage;