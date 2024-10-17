if(JSON.parse(window.localStorage.getItem("users")) === null) {
    var usersArr = []
} else { var usersArr = JSON.parse(window.localStorage.getItem("users"));
}

const aviCohen = {
    "username": "aviCohen",
    "password": 123,
    "first": "Avi",
    "last": "Cohen",
    "age": 18,
    "email": "avicohen@gmail.com",
    "score": 0
}

usersArr.push(aviCohen);
console.log(usersArr)
window.localStorage.setItem("users", JSON.stringify(usersArr))




