// When a message is sent, display it
document.addEventListener("messageRecieved", function(e) {
    let div = document.createElement("div");
    div.innerHTML = e.detail;
    document.body.appendChild(div);
})

// Uncomment and replace with either a RegExp or a value to filter incoming messages  
//SetFilter("");