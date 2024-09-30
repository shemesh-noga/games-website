var currentUser = window.localStorage.getItem("currentUser");
const signUpBtn = document.getElementById("signup");
const logInBtn = document.getElementById("login");
const logOutBtn = document.getElementById("logout");
const helloContainer = document.getElementById("helloContainer");
const hello = document.getElementById("hello");
const score = document.getElementById("score");

checkUserStat();

logOutBtn.addEventListener("click", () =>
    {window.localStorage.setItem("currentUser", "")
    checkUserStat();}
)


// if(currentUser === "") {
//     logOutBtn.setAttribute("class", "disappear");
//     helloContainer.setAttribute("class", "disappear");
//     signUpBtn.setAttribute("class", "appear");
//     logInBtn.setAttribute("class", "appear");
// } else {
//     currentUser = JSON.parse(currentUser)
//     logOutBtn.setAttribute("class", "appear");
//     helloContainer.setAttribute("class", "appear");
//     signUpBtn.setAttribute("class", "disappear");
//     logInBtn.setAttribute("class", "disappear");
    
//     hello.innerHTML = `Hello ${currentUser.first} ${currentUser.last}`
//     score.innerHTML = `SCORE: ${currentUser.score}`
// }


function checkUserStat() {
    var currentUser = window.localStorage.getItem("currentUser");
    if(currentUser === "") {
        logOutBtn.setAttribute("class", "disappear");
        helloContainer.setAttribute("class", "disappear");
        signUpBtn.setAttribute("class", "appear");
        logInBtn.setAttribute("class", "appear");
    } else {
        currentUser = JSON.parse(currentUser)
        logOutBtn.setAttribute("class", "appear");
        helloContainer.setAttribute("class", "appear");
        signUpBtn.setAttribute("class", "disappear");
        logInBtn.setAttribute("class", "disappear");
        
        hello.innerHTML = `Hello ${currentUser.first} ${currentUser.last}`
        score.innerHTML = `SCORE: ${currentUser.score}`
    }
}