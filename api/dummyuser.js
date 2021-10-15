const chatUsers = [];

function joinChat(id, username, chat) {
  const personalUser = { id, username, chat };

  chatUsers.push(personalUser);
  console.log(chatUsers, 'users');

  return personalUser;
}

console.log('user out', chatUsers);

function getCurrentUser(id) {
  return chatUsers.find(personalUser => personalUser.user.id === id);
}

function userDisconnect(id) {
  const index = chatUsers.findIndex(
    personalUser => personalUser.user.id === id,
  );

  if (index !== -1) {
    return chatUsers.splice(index, 1)[0];
  }
}

module.exports = {
  joinChat,
  getCurrentUser,
  userDisconnect,
};
