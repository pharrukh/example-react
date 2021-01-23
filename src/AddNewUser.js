import { Component } from "react";
import PropTypes from 'prop-types';

class AddNewUser extends Component {
    state = {
        name: '',
        surname: '',
        username: '',
        error: ''
    }

    allValuesArePassed = () =>
        (this.state.name && this.state.surname && this.state.username)

    onUsernameChangeHandle = (event) => {
        this.setState({ username: event.target.value })
        if (this.props.onUserExists(event.target.value)) {
            this.setState({ error: 'username is taken' })
        } else {
            this.setState({ error: '' })
        }
    }

    onAddUserHandle = (event) => {
        this.props.onAddUser({ name: this.state.name, surname: this.state.surname, username: this.state.username })
        this.setState({
            name: '',
            surname: '',
            username: '',
            error: ''
        })
    }

    render() {
        return (<div>
            <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })}></input><br />
            <input value={this.state.surname} onChange={e => this.setState({ surname: e.target.value })}></input><br />
            <input value={this.state.username} onChange={this.onUsernameChangeHandle}></input><br />
            <p>{this.state.error ?? ''}</p>
            <button disabled={!this.allValuesArePassed() || this.props.onUserExists(this.state.username)} onClick={this.onAddUserHandle}>add</button>
        </div>)
    }
}

AddNewUser.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    username: PropTypes.string,
    error: PropTypes.string,
    onUserExists: PropTypes.func,
    onAddUserHandle: PropTypes.func,
}

export default AddNewUser;