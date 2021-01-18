import { Component } from "react";

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
        if (this.props.existsCallback(event.target.value)) {
            this.setState({ error: 'username is taken' })
        } else {
            this.setState({ error: '' })
        }
    }

    onAddUserHandle = (event) => {
        this.props.addCallback({ name: this.state.name, surname: this.state.surname, username: this.state.username })
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
            <button disabled={!this.allValuesArePassed() || this.props.existsCallback(this.state.username)} onClick={this.onAddUserHandle}>add</button>
        </div>)
    }
}

export default AddNewUser;