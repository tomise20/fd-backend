const Server = use("Server");
const io = use("socket.io")(Server.getInstance(), {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:3006",
      "http://food.tomise20.hu",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

let sockets = [];

io.on("connection", function (socket) {
  sockets[socket.id] = socket;

  socket.on("admin join", () => {
    socket.join("admins");
    console.log("admin joinned to wait room!");
    io.to("admins").emit("success joined", "success");
  });

  socket.on("admin accepted", (socketId) => {
    io.to(socketId).emit("admin joined", socket.id);
  });

  socket.on("open new chat", (message) => {
    io.to("admins").emit("user join request", socket.id, message);
  });

  socket.on("private message", (anotherSocketId, msg) => {
    socket.to(anotherSocketId).emit("private message", socket.id, msg);
  });
});
