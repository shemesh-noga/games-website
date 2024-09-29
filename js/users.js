const usersArr = []

const aviCohen = {
    "username": "aviCohen",
    "password": 123,
    "first": "Avi",
    "last": "Cohen",
    "age": 18,
    "email": "avicohen@gmail.com",
    "score": 0
}

usersArr.push(aviCohen)


window.localStorage.setItem("users", JSON.stringify(usersArr))



