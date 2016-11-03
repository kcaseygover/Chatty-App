import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

let data = {
          currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
          messages: [
          {
            id: '1abc',
            username: "Bob",
            content: "Has anyone seen my marbles?",
          },
          {
            id: '2abc',
            username: "Anonymous",
            content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
          }
          ]
        };


        class App extends Component {
          //_this = this;
          constructor(props) {
            super(props);
            this.state = data;
            this.addMessage = this.addMessage.bind(this)

            console.log("this state in constructor: ", this.state)
          }
          componentDidMount () {
            this.socket = new WebSocket("ws://localhost:3001");
            console.log('Connected to server');
          }

          addMessage (content, username) {
            console.log("this in addMessage", this)
            let count = this.state.messages.length +1;

            const newMessage = {id: count, username: username, content: content};
            console.log("newMessage: ", newMessage)

            const allMessages = this.state.messages.concat(newMessage);
            console.log("this.state in addMessage", this.state)

            this.setState({messages: allMessages})

          }


          render() {


            return (
              <div className="wrapper">
              <nav><h1>Chatty</h1></nav>
              <MessageList messages = {this.state.messages}/>
              <ChatBar currentUser = {this.state.currentUser.name}
              onSubmit={this.addMessage}
              />
              </div>

              )
            }

          }

          export default App;




