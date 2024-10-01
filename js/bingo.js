let scoreBingo = 0;

var arr1 = [
  "קוצרט בוקר",
  "8:52-8:59",
  "זה כלי טוב אבל מסוכן",
  "פלייליסט",
  "מזגן",
  "השוקו של יאיר",
  "ג'וני",
  "הדירה של בת עמי",
  "פתיבר",
  "ציטוטים",
  "איפה ג'וני?",
  "מעלית",
  "10 פאונד",
  "מיקרוגל",
  "תג",
  "למה זה לא עובד?",
  "הפסקת מים",
  "pachelbel",
  "האיזור האסור",
  "סבבה",
  "אחלה",
  " *לקיחת מקרן* ",
  "העולם שבחוץ",
  "מה יהיה לנו?",
  "זה מסע",
  "W3",
  "scrimba",
  "codecademy",
  "סדנאות",
  "האדומים",
  'הממ"ק',
];

let start = document.getElementById("start")
let Continue = document.getElementById("Continue")
let restart = document.getElementById("restart")
restart.addEventListener("click", function(){location.reload()})
console.log(restart)
Continue.replaceWith(start)

function pickRandom(arrs) {
  var lengthOfArray = arrs.length - 1;
  var randomNumber = Math.round(Math.random() * lengthOfArray);
  return randomNumber;
}

function arrangeBoard() {
  var cloneArray = [...arr1];
  for(let i = 1 ; i < 17 ; i++){
    let random = Math.floor(Math.random() * cloneArray.length);
    let hi = "item" + i
    document.getElementById(hi.toString()).innerHTML = cloneArray[random];
    cloneArray.splice(random,1);
    document.getElementById(hi.toString()).style.backgroundColor = "#895f9e"
  }
}

function arrangeBoard2() {
  var cloneArray = [...arr1];
  for(let i = 1 ; i < 17 ; i++){
    let random = Math.floor(Math.random() * cloneArray.length);
    let hi = "itemm" + i
    document.getElementById(hi.toString()).innerHTML = cloneArray[random];
    cloneArray.splice(random,1);
    document.getElementById(hi.toString()).onclick = function(){};
     document.getElementById(hi.toString()).style.backgroundColor = "#895f9e"
  }
   start.replaceWith(Continue);

}

let sentencesArr = [...arr1]

function sentenceGenerator() {
  let random = Math.floor(Math.random() * sentencesArr.length);
  let answer = sentencesArr[random];
  sentencesArr.splice(random,1);
  return answer;

}

var row;
var column;
var row2;
var column2;

function sentenceRandom(){
  var sent = sentenceGenerator(sentencesArr);
  document.getElementById("sentence").innerHTML=sent;
  
  for(let x = 1 ; x < 17 ; x++){
    let hii = "itemm" + x
    let thisSentences =  document.getElementById(hii.toString()); 
    
    if(thisSentences.innerHTML === sent){
      thisSentences.onclick = function() {ClickBingo()};
      function ClickBingo() {
      thisSentences.style.backgroundColor = "green";

      scoreBingo += 5;
      document.getElementById("scoreBingo").innerHTML = `SCORE: ${scoreBingo}`

      var currentUser = window.localStorage.getItem("currentUser");
      var usersArr = JSON.parse(window.localStorage.getItem("users"));

      if(currentUser !== ""){
        currentUser = JSON.parse(currentUser)
        currentUser["score"] += 5;
        console.log(currentUser["score"], scoreBingo);
        window.localStorage.setItem("currentUser", JSON.stringify(currentUser));

        for(let p = 0 ; p < usersArr.length ; p++){
          console.log(usersArr[p]["username"])
          console.log(currentUser["username"])
          console.log(usersArr.length)

          if(usersArr[p]["username"] == currentUser["username"]) {
            usersArr[p]["score"] = currentUser["score"]
            window.localStorage.setItem("users", JSON.stringify(usersArr))
            break;
          }
        }
          score.innerHTML = `SCORE: ${currentUser["score"]}`
      }

      for(let x = 1 ; x < 17 ; x++){
        if(1 <= x && x <= 4) {row2 = 1}
        if(5 <= x && x <= 8) {row2 = 2}
        if(9 <= x && x <= 12) {row2 = 3}
        if(13 <= x && x <= 16) {row2 = 4}
        if(x === 1 || x === 5 || x === 9 || x === 13) {column2 = 1}
        if(x === 2 || x === 6 || x === 10 || x === 14) {column2 = 2}
        if(x === 3 || x === 7 || x === 11 || x === 15) {column2 = 3}
        if(x === 4 || x === 8 || x === 12 || x === 16) {column2 = 4}
    
    
      var numberOfGreen = 0;
      for(let y = 0; y < 4 ; y++){
        const element = document.getElementById(`itemm${1+y}`).style.backgroundColor
        console.log(element)
        if (row2 === 1 ){
          if(document.getElementById(`itemm${1+y}`).style.backgroundColor == "green"){
            numberOfGreen++
          }
        }
        if (row2 === 2 ){
          if(document.getElementById(`itemm${5+y}`).style.backgroundColor == "green"){
            numberOfGreen++
          }
        }
        if (row2 === 3 ){
          if(document.getElementById(`itemm${9+y}`).style.backgroundColor == "green"){
            numberOfGreen++
          }
        }if (row2 === 4 ){
          if(document.getElementById(`itemm${13+y}`).style.backgroundColor == "green"){
            numberOfGreen++
          }
        }
      }
    
      var columnnumberOfGreen = 0;
      for(let z = 0; z < 16 ; z += 4){
        if (column2 === 1 ){
          if(document.getElementById(`itemm${1+z}`).style.backgroundColor == "green"){
            columnnumberOfGreen++
          }
        }
        if (column2 === 2 ){
          if(document.getElementById(`itemm${2+z}`).style.backgroundColor == "green"){
            columnnumberOfGreen++
          }
        }
          if (column2 === 3 ){
            if(document.getElementById(`itemm${3+z}`).style.backgroundColor == "green"){
              columnnumberOfGreen++
            }
          }
          if (column2 === 4 ){
            if(document.getElementById(`itemm${4+z}`).style.backgroundColor == "green"){
              columnnumberOfGreen++
            }
          }
          if( columnnumberOfGreen === 4 || numberOfGreen === 4 ){
            document.getElementById("result").innerText = "winner";
            Continue.replaceWith(restart)

          }
        }
      }
    }
  }
 

  // check red !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  for(let i = 1 ; i < 17 ; i++){
    let hi = "item" + i
    let thisSentence =  document.getElementById(hi.toString()); 
    if(thisSentence.innerHTML === sent){
      thisSentence.style.backgroundColor = "red";

      if(1 <= i && i <= 4) {row = 1}
      if(5 <= i && i <= 8) {row = 2}
      if(9 <= i && i <= 12) {row = 3}
      if(13 <= i && i <= 16) {row = 4}
      if(i === 1 || i === 5 || i === 9 || i === 13) {column = 1}
      if(i === 2 || i === 6 || i === 10 || i === 14) {column = 2}
      if(i === 3 || i === 7 || i === 11 || i === 15) {column = 3}
      if(i === 4 || i === 8 || i === 12 || i === 16) {column = 4}

      var numberOfRed = 0;
      for(let j = 0; j < 4 ; j++){
        if (row === 1 ){
          if(document.getElementById(`item${1+j}`).style.backgroundColor == "red"){
            numberOfRed++
          }
        }
        if (row === 2 ){
          if(document.getElementById(`item${5+j}`).style.backgroundColor == "red"){
            numberOfRed++
          }
        }
        if (row === 3 ){
          if(document.getElementById(`item${9+j}`).style.backgroundColor == "red"){
            numberOfRed++
          }
        }if (row === 4 ){
          if(document.getElementById(`item${13+j}`).style.backgroundColor == "red"){
            numberOfRed++
          }
        }
      }

      var columnNumberOfRed = 0;
      for(let t = 0; t < 16 ; t += 4){
        if (column === 1 ){
          if(document.getElementById(`item${1+t}`).style.backgroundColor == "red"){
            columnNumberOfRed++
          }
        }
        if (column === 2 ){
          if(document.getElementById(`item${2+t}`).style.backgroundColor == "red"){
            columnNumberOfRed++
          }
        }
        if (column === 3 ){
          if(document.getElementById(`item${3+t}`).style.backgroundColor == "red"){
            columnNumberOfRed++
          }
        }
        if (column === 4 ){
          if(document.getElementById(`item${4+t}`).style.backgroundColor == "red"){
            columnNumberOfRed++
          }
        }
      }

      if(numberOfRed === 4 || columnNumberOfRed === 4){
        document.getElementById("result").innerText = "losser";
        Continue.replaceWith(restart)

        }
      }
    } 
  }
}





