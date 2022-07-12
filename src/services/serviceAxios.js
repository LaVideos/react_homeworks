import axios from "axios";

export class ServiceAxios{
    _url='https://jsonplaceholder.typicode.com/';

    getUsers(){
        return axios.get(this._url+'users').then(value => value);
    }
    getPosts(){
        return axios.get(this._url+'posts').then(value => value);
    }

    getComments(){
        return axios.get(this._url+'comments').then(value => value);
    }

}