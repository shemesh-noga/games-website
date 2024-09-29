const logIn = document.getElementById("logIn");

logIn.addEventListener("click", logInInfo)

function logInInfo() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username)
    console.log(password)
    window.localStorage()
}