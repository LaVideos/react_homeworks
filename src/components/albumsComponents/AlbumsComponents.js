import React, {useEffect, useState} from 'react';
import {ServiceFetch} from "../../services/fetch.service/fetch.service";
import {AlbumsComponent} from "../index";

const AlbumsComponents = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        ServiceFetch.albums().then(value => setAlbums([...value]));
    },[])

    return (
        <div>
            {
                albums.map(value => <AlbumsComponent key={value.id} album={value} />)
            }
        </div>
    );
};

export default AlbumsComponents;