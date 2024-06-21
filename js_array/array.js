//1
let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[4]);

//2
let oddnumber = 0;
let evennumber = 0;
let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
for (let i = 0; i < array.length; i++) {
  //   console.log(array[i]);

  if (array[i] % 2 == 1) {
    // console.log("sondgoi toonuud", array[i]);
    oddnumber += 1;
    // console.log("niit sondgoi too", oddnumber);
  } else {
    evennumber += 1;
    // console.log("niit tegsh too", evennumber);
  }
}
console.log("niit sondgoi too", oddnumber);
console.log("niit tegsh too", evennumber);

//3
length = 0;
sum = 0;
average = 0;
tegsh_sum = 0;
sondgoi_multiply = 1;
arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
//                 0   1   2 ...
let max = arrayOfNumbers[0];

for (let j = 0; j < arrayOfNumbers.length; j++) {
  length += 1;
  sum = sum + arrayOfNumbers[j];
  average = sum / length;
  if (arrayOfNumbers[j] % 2 == 0) {
    tegsh_sum = tegsh_sum + arrayOfNumbers[j];
  } else {
    sondgoi_multiply = sondgoi_multiply * arrayOfNumbers[j];
  }
  if (arrayOfNumbers[j] > max) {
    max = arrayOfNumbers[j];
    // console.log("max", max);
  }
}
console.log("length", length);
console.log("sum", sum);
console.log("average", average);
console.log("tegsh toonii niilber", tegsh_sum);
console.log("sondgoi toonii urjver", sondgoi_multiply);
console.log("max", max);
