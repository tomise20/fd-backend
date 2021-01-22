const Server = use("Server");
const io = use("socket.io")(Server.getInstance(), {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3006"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

let sockets = [];

io.on("connection", function (socket) {
  sockets[socket.id] = socket;

  socket.on("user join", (roomId) => {
    socket.join(roomId);
    console.log("user joinned to room!", roomId);
    io.to(roomId).emit("join accepted", "accepted");
  });

  socket.on("admin join", () => {
    socket.join("admins");
    console.log("admin joinned to wait room!");
    io.to("admins").emit("success joined", "success");
  });

  socket.on("admin join room", (roomId) => {
    console.log("admin joinned to private room!", roomId);
    socket.join(roomId);
  });

  socket.on("open new chat", (roomId, message) => {
    console.log("admin get a chat request", roomId);
    io.to("admins").emit("user join request", roomId, message);
  });

  socket.on("admin join private room", (roomId) => {
    console.log("admin joinned to private room!", roomId);
    socket.join(roomId);
  });

  socket.on("private message", (roomId, msg) => {
    console.log("send a private message!", roomId);
    socket.to(roomId).emit(msg);
  });
});
