import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import { auth } from '../services/firebase';
import { db } from '../services/firebase';
import ChatBubble from './ChatBubble';

class ChatPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      chats: [],
      content: '',
      readError: null,
      writeError: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  async componentDidMount() {
    // How would we get this stuff out of our database?
  }

  async handleSubmit(event) {
    // How would we put this stuff into our database
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  render() {
    const { chats, content, writeError, user } = this.state;
    return (
      <>
        <Card elevation={24} className="elevation-24 my-2" style={{ width: '90vh' }}>
          <CardContent style={{ height: '500px', overflowY: 'scroll' }}>
            <div class='row'>
              {/*
                How can we make our chats show up?
                This will cover a function that is available to us in javascript
                called map. In order to do this, I've provided a component that simply takes
                the content from the database as while as which side we should put the chat
                bubble on (right for the sender and left for anyone else)
                <ChatBubble direction="right or left" 
              */}
            </div>
          </CardContent>
        </Card>
        <Card elevation={24} className="elevation-24 my-2" style={{ width: '90vh' }}>
          <CardContent>
            <form onSubmit={this.handleSubmit}>
              {writeError ? <p style={{ color: 'red' }}>{writeError}</p> : null}
              <input
                className='form-control form-control-lg mb-3'
                type='text'
                name='content'
                placeholder='Message...'
                onChange={this.handleChange}
                value={content}
                />
              <button className='btn btn-block btn-lg btn-primary' type="submit">Send</button>
            </form>
          </CardContent>
        </Card>
      </>
    )
  }
}

export default ChatPanel;
