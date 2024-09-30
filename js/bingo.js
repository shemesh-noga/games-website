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
}

let sentencesArr = [...arr1]

function sentenceGenerator() {
  let random = Math.floor(Math.random() * sentencesArr.length);
  let answer = sentencesArr[random];
  sentencesArr.splice(random,1);
  return answer;

}

function sentenceRandom(){
  var sent = sentenceGenerator(sentencesArr);
  document.getElementById("sentence").innerHTML=sent;
  for(let i = 1 ; i < 17 ; i++){
    let hi = "item" + i
    let thisSentence =  document.getElementById(hi.toString()); 
    if(thisSentence.innerHTML === sent){
      console.log("hi")
      console.log( thisSentence);
      thisSentence.style.backgroundColor = "green";
        }
  
  }
}

arrangeBoard()

arrangeBoard2()


