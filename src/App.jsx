import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import uuid from 'node-uuid';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Anonymous"},  // optional. if currentUser is not defined, it means the user is Anonymous
      users: 0,
      messages: [],
    };
  }

addMessage (content, username) {
  if (username === "") {
    username = "Anonymous";
  } if (this.state.currentUser.name !== username) {
    const newUser = {
    type: "postNotification",
    content: `${this.state.currentUser.name} has changed their name to ${username}.`
    }
    this.socket.send(JSON.stringify(newUser));
    this.setState({currentUser: {name: username}});
  }
  const newMessage = {
    type: "postMessage",
    username,
    content,
  };
  this.socket.send(JSON.stringify(newMessage));
}


componentDidMount () {
  this.socket = new WebSocket("ws://localhost:3001");
  this.socket.onopen = (event) => {
    console.log("Connected to server!");
  }
  this.socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case "incomingMessage":
        const message = this.state.messages.concat(data)
        this.setState({messages: message})
        break;
      case "incomingNotification":
        const notification = this.state.messages.concat(data)
        this.setState({messages: notification})
        break;
      case "counter":
        this.setState({users: data.count})
        break;
      default:
        // show an error in the console if the message type is unknown
        throw new Error("Unknown event type ", data.type);
    }
  }
}

render() {
  return (
    <div className="wrapper">
      <nav><h1>Chatty</h1>
        <h5>{this.state.users} Users Online</h5>
      </nav>
      <MessageList messages = {this.state.messages}/>
      <ChatBar currentUser = {this.state.currentUser.name}
        onSubmit={this.addMessage.bind(this)}
      />
    </div>
    )
  }
}

export default App;
