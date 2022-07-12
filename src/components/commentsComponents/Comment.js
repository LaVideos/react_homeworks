import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);

        this.value=this.props.value;

    }

    render() {
        return (
            <div style={{margin:'10px', background:'coral'}}>
                <div>{this.value.postId}</div>
                <div>{this.value.id}</div>
                <div>{this.value.name}</div>
                <div>{this.value.email}</div>
                <div>{this.value.body}</div>
            </div>
        );
    }
}

export default Comment;