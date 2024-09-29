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

function signIn(){
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = new SignInfo(firstname, lastname, username, password, age, email);
}

signButton.addEventListener("click", signIn);

// const user0 = new SignInfo("Avi", "Cohen", "Avi-Cohen", "123", 18, "avicohen@hilma.tech")
// console.log(user0)
