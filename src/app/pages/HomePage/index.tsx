import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ChatOnline from 'app/components/ChatOnline/ChatOnline';
import Conversation from 'app/components/Conversation/Conversation';
import { logout } from 'firebase';
import styled from 'styled-components/macro';

export function HomePage() {
  const [conversations, setConversations] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <button onClick={() => logout()}>Sign out</button>
      <div className="chatWrapper">
        <ChatBoxWrapper>
          <ChatMenuInput placeholder="Search for friends" />
          {conversations.map(c => (
            <div onClick={() => setCurrentChat(c)}>
              <Conversation conversation={c} currentUser={'user'} />
            </div>
          ))}
        </ChatBoxWrapper>
      </div>
      <div className="chatOnline">
        <ChatWrapper>
          <ChatOnline
            onlineUsers={onlineUsers}
            currentId={'user._id'}
            setCurrentChat={setCurrentChat}
          />
        </ChatWrapper>
      </div>
    </>
  );
}

const ChatMenuInput = styled.input`
  width: 90%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid gray;
`;

const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const ChatWrapper = styled.div`
  padding: 10px;
  height: 100%;
`;

// .chatBoxTop {
//   height: 100%;
//   overflow-y: scroll;
//   padding-right: 10px;
// }

// .chatBoxBottom {
//   margin-top: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// }

// .chatMessageInput {
//   width: 80%;
//   height: 90px;
//   padding: 10px;
// }

// .chatSubmitButton {
//   width: 70px;
//   height: 40px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   background-color: teal;
//   color: white;
// }

// .noConversationText {
//   position: absolute;
//   top: 10%;
//   font-size: 50px;
//   color: rgb(224, 220, 220);
//   cursor: default;
// }
