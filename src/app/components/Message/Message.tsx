import './message.css';
import { format } from 'timeago.js';
import styled from 'styled-components/macro';

export default function Message({ message, own }) {
  return (
    <>
      {own ? (
        <MessageOwn>
          <MessageTop>
            <MessageAvatar
              className="messageImg"
              src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <MessageText>{message.text}</MessageText>
          </MessageTop>
          <MessageBottom>{format(message.createdAt)}</MessageBottom>
        </MessageOwn>
      ) : (
        <MessageRecipient>
          <MessageTop>
            <MessageAvatar
              className="messageImg"
              src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <MessageText>{message.text}</MessageText>
          </MessageTop>
          <MessageBottom>{format(message.createdAt)}</MessageBottom>
        </MessageRecipient>
      )}
      )
    </>
  );
}

const MessageOwn = styled.div`
  align-items: flex-end;
  background-color: rgb(245, 241, 241);
  color: black;
`;

const MessageRecipient = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const MessageTop = styled.div`
  display: flex;
`;

const MessageAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const MessageText = styled.p`
  padding: 10px;
  border-radius: 20px;
  background-color: #1877f2;
  color: white;
  max-width: 300px;
`;

const MessageBottom = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;
