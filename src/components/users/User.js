import React from 'react';
import {UserDetails} from "../index";

const User = (props) => {
    const {user, getInfo,/*info*/} = props;
    return (

        // як зробити так, щоб після натиснення на кнопку
        // під кожним юзером створювався дів з його особистою інфою
        // таким чином, як то зробив я - то при натисненні створюється дів відразу під всіма
        // з інофою того, кому ця кнопка належала

        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>

            <button onClick ={()=>
               getInfo(user)
            } >info</button>

            {/*{*/}
            {/*    info && <UserDetails username ={info.username} email = {info.email}/>*/}
            {/*}*/}
        </div>
    );
};

export default User;