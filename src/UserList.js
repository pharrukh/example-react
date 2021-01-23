import { Component } from "react";
import UserListItem from './UserListItem'
import PropTypes from 'prop-types';

class UserList extends Component {
    state = {
        hide: false
    }

    onHideHandle = () => {
        this.setState({ hide: !this.state.hide })
    }

    render() {
        const list = this.props.users.map(u => (<UserListItem key={u.username} username={u.username} showGameNumber={this.state.hide} />))
        return (<div>{list}<button onClick={this.onHideHandle}>{this.state.hide ? 'hide' : 'show'}</button></div>)
    }
}

UserList.propTypes = {
    users: PropTypes.array
}

export default UserList