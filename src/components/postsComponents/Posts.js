import React, {Component} from 'react';
import {ServiceAxios} from "../../services/serviceAxios";
import {Post} from "../index";


class Posts extends Component {

    state={posts:[]};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.ServiceAxios=new ServiceAxios();
        this.ServiceAxios.getPosts().then(({data})=>this.setState({posts:data}));
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(value =><Post key={value.id} value={value} />)
                }
            </div>
        );
    }
}

export default Posts;