
let socket = io();

let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector(".messages");
let result = [];
let feedBack = JSON.parse(localStorage.getItem("messages"));

// Loading previous Messages
window.onload = () => {
  if (feedBack === null) {
    result = [];
    return;
  }
  feedBack.forEach(element => {
    let li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);
  });
  ul.scrollTop = ul.scrollHeight;
};

// 
form.addEventListener("submit", e => {
  e.preventDefault();
  let data;
  socket.emit("message", input.value);
  input.value = "";
  return false;
});

// Welcome Message
socket.on('message', msg => {
  let h2 = document.createElement('h4');
  h2.innerHTML = msg;
  ul.appendChild(h2);

  setTimeout(() => {
    ul.removeChild(h2);
  }, 7000);
});


// User Message Emitted to all.
socket.on("userMessage", msg => {
  let li = document.createElement("li");
  li.innerText = msg;
  ul.appendChild(li);
  result = [...result, msg];
  console.log(msg);

  let newresult = JSON.parse(localStorage.getItem("messages"));
  if (newresult !== null) {
    result = [msg, ...newresult];
  }
  result.sort(() => -1);
  localStorage.setItem("messages", JSON.stringify(result));


  ul.scrollTop = ul.scrollHeight;
});