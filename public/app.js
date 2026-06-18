const socket = io("http://localhost:3000");

const chat = document.getElementById("chat");
const menu = document.getElementById("menu");

socket.on("message", (msg) => {
  chat.innerHTML += `<div>💬 ${msg}</div>`;
});

socket.on("refresh", loadMenu);

function send() {
  const msg = document.getElementById("msg").value;
  socket.emit("message", msg);
  document.getElementById("msg").value = "";
}

// LOAD MENU
async function loadMenu() {
  const res = await fetch("/dishes");
  const data = await res.json();

  menu.innerHTML = "<h3>🍽 Menu</h3>";

  data.forEach((d) => {
    menu.innerHTML += `
      <div class="item">
        🍔 ${d.name} | ₱${d.price} | ${d.category} | ${d.store_number}
      </div>
    `;
  });
}

loadMenu();