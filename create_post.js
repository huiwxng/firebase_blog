const database = firebase.database().ref();

const titleInput = document.getElementById("blog-title")
const usernameInput = document.getElementById("username");
const blogInput = document.getElementById("blog-body");
const sendButton = document.getElementById("send-btn");

sendButton.onclick = updateDB;

function updateDB(event) {
    // prevent page from refreshing
    event.preventDefault();

    // create an object with the data we want to add
    const row = {
        TITLE: titleInput.value,
        USERNAME: usernameInput.value,
        BODY: blogInput.value
    };

    database.push(row);
}