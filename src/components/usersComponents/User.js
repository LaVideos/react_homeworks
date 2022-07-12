import React, {Component} from 'react';

class User extends Component {


    constructor(props) {
        super(props);
        this.value = this.props.value;
    }

    render() {

        return (
            <div style={{margin:'10px',background:'pink'}}>
                <div>{this.value.name}</div>
                <div>{this.value.id}</div>
                <div>{this.value.username}</div>
            </div>
        );
    }
}

export default User;