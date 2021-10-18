import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

interface IUser {
  id: string;
  profilePicture: string;
  username: string;
}

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    // const getFriends = async () => {
    //   const res = await axios.get('/users/friends/' + currentId);
    //   setFriends(res.data);
    // };
    // getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f: IUser) => onlineUsers.includes(f.id)));
  }, [friends, onlineUsers]);

  const handleClick = async user => {
    try {
      // const res = await axios.get(
      //   `/conversations/find/${currentId}/${user._id}`,
      // );
      // setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ChatOnlineWrapper>
      {onlineFriends.map((o: IUser) => (
        <ChatOnlineFriend onClick={() => handleClick(o)}>
          <ChatOnlineImageContainer>
            <ChatOnlineImage
              src={o?.profilePicture ? o.profilePicture : 'person/noAvatar.png'}
              alt=""
            />
            <ChatOnlineBadge></ChatOnlineBadge>
          </ChatOnlineImageContainer>
          <span className="chatOnlineName">{o?.username}</span>
        </ChatOnlineFriend>
      ))}
    </ChatOnlineWrapper>
  );
}

const ChatOnlineWrapper = styled.div`
  padding: 10px;
  height: 100%;
`;

const ChatOnlineFriend = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
`;

const ChatOnlineImageContainer = styled.div`
  position: relative;
  margin-right: 10px;
`;

const ChatOnlineImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid white;
`;

const ChatOnlineBadge = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: limegreen;
  position: absolute;
  top: 2px;
  right: 2px;
`;
