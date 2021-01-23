import { Component } from "react";
import UserListItem from './UserListItem'

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

export default UserList