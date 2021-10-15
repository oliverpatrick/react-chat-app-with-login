const express = require('express');
const socket = require('socket.io');
const cors = require('cors');

const app = express();

app.use(express());
app.use(cors());

const { getCurrentUser, userDisconnect, joinChat } = require('./dummyuser');

const PORT = 8000;

let server = app.listen(
  PORT,
  console.log(`Server is running on port: ${PORT}`),
);

const io = socket(server);

//initializing the socket io connection
io.on('connection', socket => {
  //for a new user joining the room
  socket.on('joinRoom', ({ username, channel }) => {
    //* create user
    const personalUser = joinChat(socket.id, username, channel);
    console.log(socket.id, '=id');
    socket.join(personalUser.chat);

    //display a welcome message to the user who have joined a room
    socket.emit('message', {
      userId: personalUser.id,
      username: personalUser.username,
      text: `Welcome ${personalUser.username}`,
    });

    //displays a joined room message to all other room users except that particular user
    socket.broadcast.to(personalUser.chat).emit('message', {
      userId: personalUser.id,
      username: personalUser.username,
      text: `${personalUser.username} has joined the chat`,
    });
  });

  //user sending message
  socket.on('chat', text => {
    //gets the room user and the message sent
    const personalUser = getCurrentUser(socket.id);

    io.to(personalUser.chat).emit('message', {
      userId: personalUser.id,
      username: personalUser.username,
      text: text,
    });
  });

  //when the user exits the room
  socket.on('disconnect', () => {
    //the user is deleted from array of users and a left room message displayed
    const personalUser = userDisconnect(socket.id);

    if (personalUser) {
      io.to(personalUser.room).emit('message', {
        userId: personalUser.id,
        username: personalUser.username,
        text: `${personalUser.username} has left the room`,
      });
    }
  });
});
