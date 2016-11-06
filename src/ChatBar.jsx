import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (event.charCode == 13){
      event.preventDefault();
      this.props.onSubmit(this.refs.newmessage.value, this.refs.username.value)
    }
    this.state.value = "";
  }

  render(){
    const currentUser = this.props.currentUser;
    return (
      <footer>
        <input
          id="username"
          type="text"
          placeholder="Your name (Optional)"
          ref="username"
          value={this.props.currentuser}
        />
        <input
          id="new-message"
          type="text"
          placeholder="Type a message and hit ENTER"
          ref="newmessage"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleSubmit}
        />
      </footer>
    );
  }
}

export default ChatBar;
