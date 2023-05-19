const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const PORT = 5000;

let users = [];

const addUser = (username, roomId) => {
  users.push({
    username: username,
    roomId: roomId,
  });
};

const userLeave = (username) => {
  return users.filter((user) => user.username != username);
};

const getAllUsers = (roomId) => {
  return users.filter((user) => user.roomId == roomId);
};

app.get("/", (req, res) => {
  // console.log(users)
  res.send(users);
  // res.send("Working!!")
});

io.on("connection", (socket) => {
  console.log("Someone connected");
  socket.on("join-room", ({ roomId, username }) => {
    console.log("User Joined room");
    console.log(roomId);
    console.log(username);
    if (roomId && username) {
      socket.join(roomId);
      addUser(username, roomId);

      // socket.to(roomId).emit("user-connexted",username)
      socket.to(roomId).emit("user-connected", username);
      io.to(roomId).emit("all-users", getAllUsers(roomId));
    }

    socket.on("disconnect", () => {
      console.log("Disconnected");
      socket.leave(roomId);
      userLeave(username);
      io.to(roomId).emit("all-users", getAllUsers(roomId));
    });
  });
});

server.listen(PORT, () => {
  console.log(`Successfully Connected at Port ${PORT}`);
});
