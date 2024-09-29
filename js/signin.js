const signButton = document.getElementById("signIn");


// construction function
function SignInfo(first, last, username, password, age, email) {
    this.username = username;
    this.password = password;
    this.first = first;
    this.last = last;
    this.age = age;
    this.email = email;
    this.score = 0;
}

signButton.addEventListener("click", signIn);

function signIn(){
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let usersArr = JSON.parse(window.localStorage.getItem("users"));

    for(let i = 0 ; i < usersArr.length ; i++) {
        if(username === usersArr[i]["username"]){
            document.getElementById("change").innerHTML = "This username is taken. Please pick another one"
            document.getElementById("usernameInput").style.border = "1px solid red"
            return;
        }

        if (firstname === "" || lastname === "" || age === "" || email === "" || username === "" || password === "") {
            document.getElementById("change").innerHTML = "All fields are required.";
            return;
        }


        const newUser = new SignInfo(firstname, lastname, username, password, age, email);
        usersArr.push(newUser);
        window.localStorage.setItem("users", JSON.stringify(usersArr));
        window.location.href = "../index.html";
    }
}


// const user0 = new SignInfo("Avi", "Cohen", "Avi-Cohen", "123", 18, "avicohen@hilma.tech")
// console.log(user0)
