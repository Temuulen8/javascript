// let i = 0;
// while (i < 100) {
//   console.log("hello world");
//   i++;
// }

// 1
for (let i = 0; i <= 10; i++) {
  console.log("i = ", i);
}

//2
for (let a = 0; a <= 10; a++) {
  if (a % 2 == 1) {
    console.log("sondgoi = ", a);
  }
}

//3
for (let a2 = 0; a2 <= 10; a2++) {
  if (a2 % 2 == 0) {
    console.log("tegsh = ", a2);
  }
}

//4
let f = 0;
for (let j = 0; j <= 100; j++) {
  f = f + j;
}
console.log("sum:", f);

//5
let q = 0;
let n = 50;

for (let w = 0; w <= n; w++) {
  q = q + w;
  console.log("input:", w);
}

console.log("output:", q);

//6
let e = 1;
let N = 8;

for (let r = 1; r <= N; r++) {
  e = e * r;
}

console.log("output:", e);

//7
let num = 95;
let sum = 0;
while (num > 0) {
  let lastDig = num % 10; // 3 // 2
  num = Math.floor(num / 10); // 12
  sum = sum + lastDig;
  console.log("sum", sum);
}

//8
// let nmbr = 1234;
// let summ = 0;
// while (nmbr > 0) {
//   let lastDig = nmbr % 10; //4
//   if (lastDig % 2 == 0) {
//     summ = summ + lastDig;
//     nmbr = Math.floor(nmbr / 10);
//     console.log("summ", summ);
//   }
// }
