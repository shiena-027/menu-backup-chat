const express = require("express");
const http = require("http");
const cors = require("cors");
const mysql = require("mysql2");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.static("public"));

// MYSQL CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "INSERT YOUR MYSQL PASSWORD HERE",
  database: "restaurant_db",
});

db.connect(() => console.log("MySQL connected"));

// GET DISHES
app.get("/dishes", (req, res) => {
  db.query("SELECT * FROM dishes ORDER BY id DESC", (err, results) => {
    if (err) return res.json(err);
    res.json(results);
  });
});

// CHAT COMMAND HANDLER
function handleCommand(msg) {
  if (!msg.startsWith("add:")) return;

  const data = msg.replace("add:", "").split(",");

  const name = data[0]?.trim();
  const price = data[1]?.trim();
  const category = data[2]?.trim();
  const store = data[3]?.trim();

  const sql =
    "INSERT INTO dishes (name, price, category, store_number) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, price, category, store], (err) => {
    if (err) console.log(err);
    io.emit("refresh");
  });
}

// SOCKET CHAT
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("message", (msg) => {
    handleCommand(msg);
    io.emit("message", msg);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
