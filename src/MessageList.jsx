import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const messages = this.props.messages;
    const messageItems = messages.map((msg) =>{

      return <Message message={msg} key={msg.id.toString()} />

    })

    return (
    <div id="message-list">
    {messageItems}
    <div className="message system">
    </div>
    </div>

    );
  }
}


export default MessageList;

