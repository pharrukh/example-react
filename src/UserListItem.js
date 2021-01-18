const UserListItem = ({ username, showGameNumber }) => {
    return (<p>{username} played {showGameNumber ? 0 : '*'} games</p>)
}

export default UserListItem