console.log("Hello world!!!");

function count(string) {
    console.log("string => ",string);
    let strObj = {};
    if (string.length !== 0) {
      for (const key of string){
        // console.log("i = ",i, "  ", !strObj.hasOwnProperty(string[i]));
        if (!strObj.hasOwnProperty(key)){
          strObj[key] = 0;
        }
        strObj[key]++;
      }
      return strObj;
    }
    return {};
}

let str1 = "aaabccdabb";
console.log(count(str1));

console.log("============");
// let str2 = "aaabccdadb";
// console.log(str2.replace(/a/g, ''));
// console.log(str2.split('a'));

function howMuchILoveYou(nbPetals) {
    let arr = ["I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"];

    let index = ((nbPetals % (arr.length)) === 0 ) ? 
    5 : (nbPetals % arr.length) - 1;

  
    return nbPetals <= arr.length ? arr[nbPetals-1]: arr[index]
}

console.log(howMuchILoveYou(169));

console.log("============");

let arrA = [3,2,1,7,4,1,5,7,1];
// let arrB = arrA.join().replaceAll(1,0).split(",");
// console.log("arrB => ",arrB);
for (let i = 0; i < arrA.length; i++) {
  if (arrA[i] === 1) {
    arrA = arrA.with(i, 'ok');
  } 
}
console.log(arrA);

// let a= 5;
// a = 1;
// console.log(a);
let str = "zhanna_osypenko";
console.log(str.replaceAll("n","N"));
console.log(arrA.join(""));
console.log(arrA.join().split(","));



