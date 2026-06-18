📌 Restaurant Backup Chat System

A real-time backup admin chat system built with Node.js, Express, Socket.IO, and MySQL.
This system allows restaurant staff to manage menu items through chat commands in case the main system (e.g., Messenger/Meta chatbot) goes down.

🚀 Features
💬 Real-time chat interface (Socket.IO)
🍔 Add dishes through chat commands
🏪 Multi-store support (Store 1, Store 2, etc.)
🗄️ MySQL database integration
🎨 Simple responsive UI (orange/red theme)
⚡ Instant menu updates without refresh
🔁 Works as backup system for production apps

🧰 Tech Stack
> Node.js
> Express.js
> Socket.IO
> MySQL
> HTML, CSS, JavaScript

📂 Project Setup
1. Clone the repository
git clone https://github.com/your-username/menu-backup-chat.git
cd menu-backup-chat

2. Install dependencies
npm install

3. Run the server
node server.js

Then open:
http://localhost:3000

🗄️ MySQL Setup
1. Create database
CREATE DATABASE restaurant_db;
USE restaurant_db;

2. Create table
CREATE TABLE dishes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10,2),
  category VARCHAR(100),
  store_number VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

3. Configure database connection (server.js)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restaurant_db",
});

💬 Chat Commands
You can control the system using chat messages:
   ➕ Add a dish
      add: Burger, 120, Fast Food, Store 1
      add: Chicken Adobo, 150, Filipino, Store 2

Format:
add: name, price, category, store


🔥 Firebase Alternative (Optional)
If you don’t want MySQL, you can use Firebase instead:

Why Firebase?
> No server setup needed for database
> Real-time updates built-in
> Easier deployment

Replace MySQL with:
> Firebase Firestore
> Firebase SDK in Node.js
> Store dishes as collections:
{
  "name": "Burger",
  "price": 120,
  "category": "Fast Food",
  "store": "Store 1"
}

📡 How it works
> Admin sends a message in chat
> Server detects command (add:)
> Data is saved to database
> All connected clients update instantly

🏪 Use Case
> This system is useful for:
> Backup ordering system
> Restaurant multi-branch management
> Emergency menu updates
> Internal staff communication tool

⚠️ Notes
> Make sure MySQL is running before starting server
> Do not push node_modules to GitHub
> Add .env later for security improvements (recommended)
