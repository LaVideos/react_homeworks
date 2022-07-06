const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const ServiceFetch = {
    todos:()=>fetch(baseUrl+'todos').then(value => value.json()),
    albums:()=> fetch(baseUrl+'albums').then(value => value.json()),
    post:()=>fetch(baseUrl+'posts').then(value => value.json()),
    comment:(id)=> fetch(`${baseUrl}posts/${id}/comments`).then(value => value.json())
}