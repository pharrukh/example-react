import './App.css';
import AddNewUser from './AddNewUser'
import UserList from './UserList'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    users: [{ name: 'Timur', surname: 'Khaydarov', username: 'chalob' }]
  }

  handleUserExists = (username) => {
    return this.state.users.find(u => u.username === username)
  }

  handleAddUser = (user) => {
    this.state.users.push(user)
    this.setState({})
  }

  render() {
    return (
      <div className="App" >
        <div className="container">
          <AddNewUser onAddUser={this.handleAddUser} onUserExists={this.handleUserExists} />
          <UserList users={this.state.users} />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  users: PropTypes.array
}

export default App;
