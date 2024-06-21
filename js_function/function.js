// function greet() {
//   console.log("hello there");
// }
// greet();

// function name(name) {
//   console.log("hello " + name + " :)");
// }
// let input = prompt("enter name");
// name(input);

function myfunction(p1, p2, p3) {
  let multiply = p1 * p2 * p3;

  return multiply;
}

console.log(myfunction(2, 3, 4));

function findSum(num1, num2) {
  let sum = num1 + num2;
  // console.log("num1", num1);
  // console.log("sum", sum);
  return sum;
  // console.log("sum++", sum);
}

console.log("sum", findSum(7, 8));
// findSum(7, 8);

//arrow function
let sum = (num1, num2) => {
  return num1 + num2;
};

console.log("sum with arrow", sum(2, 3));

// exercise 1
function age(myage) {
  if (myage >= 25) {
    return myage;
    // console.log("above 25 ", myage);
  } else {
    return "below 25";
    // console.log("below 25", myage);
  }
}

console.log(age(20));

let sum1 = 0;
let even_sum = 0;
let array = [1, 2, 3, 4, 5];
function arraysum() {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    sum1 = sum1 + array[i];
    // console.log("kk", sum1);
    if (array[i] % 2 == 0) {
      even_sum = even_sum + array[i];
      console.log(even_sum);
    }
  }
  return sum1;
}

console.log(arraysum());

function findnum(nums, find) {
  // console.log(nums);
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === find) {
      // console.log("tentsej bn", nums[j]);
      return nums[j];
    }
  }
  return -1;
}

let number = [3, 4, 6, 1];

// findnum(number, 11);
console.log(findnum(number, 6));
