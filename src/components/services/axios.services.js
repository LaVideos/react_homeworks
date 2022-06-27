import axios from "axios";

let axiosServices = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

const getUsers = () => axiosServices('users').then(value => value);

const getUser = (id) => axiosServices('users/'+id).then(value => value.data);

const getUserPosts = (id) => axiosServices('users/'+id+'/posts').then(value => value.data);


export {
    getUsers,
    getUserPosts,
    getUser
}

