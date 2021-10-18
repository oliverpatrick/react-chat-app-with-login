import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import IUser from '../../../lib/models/IUser';
import firebase from '@firebase/app-compat';

import { useCollectionData } from 'react-firebase-hooks/firestore';

const firestore = firebase.firestore();

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState<IUser>({});
  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  useEffect(() => {
    // const friendId = conversation.members.find(m => m !== currentUser._id);
    // const getUser = async () => {
    //   try {
    //     const res = await fetch('/users?userId=' + friendId);
    //     setUser(res.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getUser();
  }, [currentUser, conversation]);

  return (
    <ConversationWrapper className="conversation">
      <ConversationImage
        src={user?.profilePicture ? user.profilePicture : 'person/noAvatar.png'}
        alt=""
      />
      <ConversationName>{user?.displayName}</ConversationName>
    </ConversationWrapper>
  );
}

const ConversationWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;

  :hover {
    background-color: rgb(245, 243, 243);
  }
`;

const ConversationImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const ConversationName = styled.div`
  font-weight: 500;
`;
