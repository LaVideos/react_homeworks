import React, {Component} from 'react';
import {ServiceAxios} from "../../services/serviceAxios";
import User from "./User";

class Users extends Component {

    state={users:[]};


    constructor(props,context) {
        super(props,context);
    }

    componentDidMount() {
        this.ServiceAxios = new ServiceAxios();
        this.ServiceAxios.getUsers().then(({data}) => this.setState({users:data}));
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(value => <User key={value.id} value={value} />)
                }
            </div>
        );
    }
}

export default Users;