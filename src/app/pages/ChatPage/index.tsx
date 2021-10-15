import React from 'react';
import ChatContainer from 'app/components/ChatContainer/ChatContainer';

export function ChatPage({ socket }): JSX.Element {
  return (
    <ChatContainer
      // username={props.match.params.username}
      // channel={props.match.params.channel}
      socket={socket}
    />
  );
}
