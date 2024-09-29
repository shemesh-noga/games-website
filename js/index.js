const logIn = document.getElementById("logIn");



logIn.addEventListener("click", logInInfo);

function logInInfo() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    for(let i = 0 ; i < usersArr.length ; i++) {
        if(usersArr[i]["username"] == username && usersArr[i]["password"] == password) {
            currentUser = usersArr[i];
            document.querySelector("#wrong").innerHTML = "";
            window.localStorage.setItem("currentUser", JSON.stringify(currentUser))
            window.location.href = '/html/home.html';
            break;
        }
        else {
            document.querySelector("#wrong").innerHTML = "Wrong username or password. Try again"
        }
    }
    console.log(currentUser)
}


