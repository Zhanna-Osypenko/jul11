console.log("Hello world!!!");

function eleven(n) {
  // let strN = n.toString();
  let arrN = String(n).split('').map(Number);;

  console.log("arrN => ", arrN);
  let even = arrN.reduce((sum,elem,ind) => {
    // console.log(sum,elem,ind);
    if (ind%2 == 0) {
      sum += elem;
    }
    return sum;
  },0);

  let odd = arrN.reduce((sum,elem,ind) => {
    if (ind%2 != 0) {
      sum += elem;
    }
    return sum;
  },0);

  console.log("even = ", even);
  console.log("odd = ", odd);

  return ((even-odd)%11 === 0)?
  `YES, the number ${n} is divisible by 11`:
  `NO, the number ${n} is NOT divisible by 11`;

}

console.log(eleven(625581));

console.log("===================");
// let a=1342;
// console.log(a.toString().split(""));

// let arr2 = ["Hello","World"];
// let arr3 = ["Ok!","Zhanna"];

// console.log("arr = ", arr2);
// function transposeTwoStrings (array) {
//   let word1 = array[0];
//   let word2 = array[1];
//   let a = array.map((elem) => elem.length);
//   let maxLengthWord = Math.max(...a);
//   let result = "";
//   for (let i = 0; i < maxLengthWord; i++) {
//     let x = word1[i]?word1.substr(i, 1):"_";
//     let y = word2[i]?word2.substr(i, 1):"_";
    
//     result += (i !== (maxLengthWord - 1))?
//     `${x} ${y}\n`:`${x} ${y}`;
//   }
//   return result;
// }

// console.log(transposeTwoStrings(arr3));

function isPalindrom (str) {
  return (str === str.split("").reverse().join(""))?
  true:false;
}



let a = "123321";
let b = "123210";
let c = "";
let d = "45654";
let e = "1";


// console.log(b.split("").reverse().join(""));

console.log(isPalindrom(e));

// =======================

function creditCard (cardNumber) {
  return (cardNumber.substr(0,4) + " **** **** " + cardNumber.substr(-4,4))
}

let card1 = "1234432156788765";
let card2 = "7777432156782222";
// console.log(card1.substr(0,4) + " **** **** " + card1.substr(-4,4));
console.log(creditCard(card2));

// ============= zhanna branch ===================
console.log("New branch zhanna");

