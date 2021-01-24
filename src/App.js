import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow'

const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {
  state = {
    users,
    messages
  }

  handleAddNewMessage = (message) => {
    this.state.messages.push(message)
    this.setState({})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow messages={messages} username={users[0].username} onAddNewMessage={this.handleAddNewMessage} />
          <ChatWindow messages={messages} username={users[1].username} onAddNewMessage={this.handleAddNewMessage} />
        </div>
      </div>
    );
  }
}

export default App;
