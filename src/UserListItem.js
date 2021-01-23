import PropTypes from 'prop-types';

const UserListItem = ({ username, showGameNumber }) => {
    return (<p>{username} played {showGameNumber ? 0 : '*'} games</p>)
}

UserListItem.propTypes = {
    username: PropTypes.string,
    showGameNumber: PropTypes.bool,
}


export default UserListItem