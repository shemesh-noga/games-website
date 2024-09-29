var arr1 = [
  "קוצרט בוקר",
  "8:52-8:59",
  "זה כל טוב אבל מסוכן",
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

// let randomArr = [];


// function arrangeBoard() {
//   for(let i = 1 ; i < 17 ; i++){
//     let random = pickRandom(arr1)
//     randomArr.push(random);
//     for(let j = 0 ; j < randomArr.length ; j++){
//       randomArr = [];
//       if (random === randomArr[j]) {arrangeBoard()}
//       else { break;}
//     }
//     let hi = "item" + i
//     document.getElementById(hi.toString()).innerHTML = random;
    

//   }
// }


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
  sentencesArr.splice(random,1);
  return sentencesArr[random];
}





arrangeBoard()

arrangeBoard2()




  var sent = sentenceGenerator(sentencesArr);

  document.getElementById("sentence").innerHTML = sent;

  // document.querySelector(".item1").innerHTML = sent;

