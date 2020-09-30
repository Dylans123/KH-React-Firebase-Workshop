import React from 'react';
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core';
import { signout } from '../helpers/auth';
import ChatPanel from '../components/ChatPanel';

const Chat = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">
            Chat
          </Typography>
          <Button color="inherit" onClick={() => signout()}>Logout</Button>
        </Toolbar>
      </AppBar>
      <div style={{ height: '95vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <ChatPanel />
      </div>
    </>
  )
}

export default Chat;
