import React from 'react';
import { Card, CardContent } from '@material-ui/core';

const ChatBubble = ({ chatInfo, direction }) => {
  console.log(chatInfo)
  const backgroundColor = direction === 'left' ? 'lightgreen' : 'lightblue'
  return (
    <Card className="my-1" style={{ width: '50vh', background: backgroundColor }}>
      <CardContent>
        <div class="row">
          <div class="col-12">
            <b>{chatInfo.uid}</b>
          </div>
          <div class="col-12">
            {chatInfo.content}
          </div>
          <div class="col-12" style={{ textAlign: 'right' }}>
            <small>{chatInfo.timestamp}</small>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ChatBubble;
