import logo from './logo.svg';
import './App.css';
import AddNewUser from './AddNewUser'
import UserList from './UserList'
import React, { Component } from 'react';

class App extends Component {
  state = {
    users: [{ name: 'Timur', surname: 'Khaydarov', username: 'chalob' }]
  }

  existUserHandle = (username) => {
    return this.state.users.find(u => u.username === username)
  }

  addUserHandle = (user) => {
    console.log(JSON.stringify(user))
    this.state.users.push(user)
    this.setState({ users: this.state.users })
  }

  render() {
    return (
      <div className="App" >
        <div class="container">
          <AddNewUser addCallback={this.addUserHandle} existsCallback={this.existUserHandle} />
          <UserList users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default App;
