import React, {Component} from 'react';
import {ServiceAxios} from "../../services/serviceAxios";
import {Comment} from "../index";

class Comments extends Component {
    state={comments:[]}

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.ServiceAxios = new ServiceAxios();
        this.ServiceAxios.getComments().then(({data})=>this.setState({comments:data}))
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(value => <Comment key={value.id} value={value} />)
                }
            </div>
        );
    }
}

export default Comments;