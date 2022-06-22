const UserDetails =(props)=>{
    const {username,email} = props
    return (<div>
        <div>{username}</div>
        <div>{email}</div>
    </div>)
}

export default UserDetails