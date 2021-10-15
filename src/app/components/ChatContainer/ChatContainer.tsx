import React, { useState, useEffect, useRef } from 'react';
import { ChatWrapper } from './ChatWrapper';
import { Message, MessageRecieved } from './Message';
import { MessageWrapper } from './MessageWrapper';
import { SendMessage } from './SendMessage';
import { UsernameWrapper } from './UsernameWrapper';

export default function ChatContainer({
  // username,
  // channel,
  socket,
}): JSX.Element {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  let username = 'oli';
  let channel = 'landscape';

  useEffect(() => {
    socket.on('message', data => {
      let temp = messages;

      temp.push({
        userId: data.userId,
        username: data.username,
        text: data.text,
      });

      setMessages([...temp]);
    });
  }, [socket]);

  const sendData = () => {
    if (text !== '') {
      socket.emit('chat', text);
      setText('');
    }
  };

  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  console.log(messages, 'mess');

  return (
    <ChatWrapper>
      <UsernameWrapper>
        <img src="" alt=""></img>
        <h2>
          {username} <span style={{ fontSize: '0.7rem' }}> in {channel} </span>
        </h2>
      </UsernameWrapper>
      <MessageWrapper>
        {messages.map(i => {
          if (i.username === username) {
            return (
              <Message>
                <p>{i.text}</p>
                <span>{i.username}</span>
              </Message>
            );
          } else {
            return (
              <MessageRecieved>
                <p>{i.text}</p>
                <span>{i.username}</span>
              </MessageRecieved>
            );
          }
        })}
        <div ref={messagesEndRef} />
      </MessageWrapper>
      <SendMessage>
        <input
          placeholder="enter your message"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              sendData();
            }
          }}
        ></input>
        <button onClick={sendData}>Send</button>
      </SendMessage>
    </ChatWrapper>
  );
}
