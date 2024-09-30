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
Continue.replaceWith(start)

function pickRandom(arrs) {
  var lengthOfArray = arrs.length - 1;
  var randomNumber = Math.round(Math.random() * lengthOfArray);
  return randomNumber;
}

function arrangeBoard() {
  let cloneArray = [...arr1];
  for(let i = 1 ; i < 17 ; i++){
    let random = Math.floor(Math.random() * cloneArray.length);
    let hi = "item" + i
    document.getElementById(hi.toString()).innerHTML = cloneArray[random];
    cloneArray.splice(random,1);
  }
}

function arrangeBoard2() {
  let cloneArray = [...arr1];
  for(let i = 1 ; i < 17 ; i++){
    let random = Math.floor(Math.random() * cloneArray.length);
    let hi = "itemm" + i
    document.getElementById(hi.toString()).innerHTML = cloneArray[random];
    cloneArray.splice(random,1);
  }
  start.replaceWith(Continue);
  //  document.getElementsByClassName("bingo").style.backgroundColor = "#895f9e"
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
        Continue.replaceWith(start)
       
        

        }
      }
    } 
  }
}


