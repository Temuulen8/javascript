// prompt("ta 1-7 hoorond too songoj oruulna uu");

// let weeknumber = Number(prompt("ta 1-7 hoorond too songoj oruulna uu"));
// let gargiinNer;

// if (weeknumber === 1) {
//   //   console.log("davaa");
//   gargiinNer = "davaa";
// } else if (weeknumber === 2) {
//   //   console.log("myagmar");
//   gargiinNer = "myagmar";
// } else if (weeknumber === 3) {
//   //   console.log("lhagva");
//   gargiinNer = "lhagva";
// } else if (weeknumber === 4) {
//   //   console.log("purev");
//   gargiinNer = "purev";
// } else if (weeknumber === 5) {
//   //   console.log("baasan");
//   gargiinNer = "baasan";
// } else if (weeknumber === 6) {
//   //   console.log("byamba");
//   gargiinNer = "bymba";
// } else if (weeknumber === 7) {
//   //   console.log("nyam");
//   gargiinNer = "nyam";
// } else {
//   //   console.log("tanii oruulsan toond tohiroh ner oldsongui");
//   gargiinNer = "oldsongui";
// }

// switch (weeknumber) {
//   case 1: {
//     gargiinNer = "davaa";
//     break;
//   }
//   case 2: {
//     gargiinNer = "myagmar";
//     break;
//   }
//   case 3: {
//     gargiinNer = "lhagva";
//     break;
//   }
//   case 4: {
//     gargiinNer = "purev";
//     break;
//   }
//   case 5: {
//     gargiinNer = "baasan";
//     break;
//   }
//   case 6: {
//     gargiinNer = "byamba";
//     break;
//   }
//   case 7: {
//     gargiinNer = "nyam";
//     break;
//   }
//   default: {
//     gargiinNer = "oldsongui";
//   }
// }

// console.log("tanii oruulsan too", weeknumber);
// console.log("tanii oruulsan toond tohiroh utga", gargiinNer);

// let age = 20;
// let gender = "er";

// if (age >= 18 && gender === "er") {
//   console.log("ta nasand hursen ergtee baina");
//   console.log("ta nasand hureegui esvel emegtei baina");
// }

// if (age >= 18 || gender === "er") {
//   console.log("ta nasand hursen esvel eregtee");
//   console.log("ta nasand hureegui bolon emegtei baina");
// }

//bodlogo 1

let myAge = 28;
if (myAge >= 25) {
  console.log("above 25 ", myAge);
} else {
  console.log("below 25", myAge);
}

//bodlogo 2

let n = 6; // 1 % 2 => 1, 2 % 2 => 0, 3 % 2 => 1,
if (n % 2) {
  console.log("it's odd number", n);
} else {
  console.log("it's even number", n);
}

//bodlogo 3

let a = 12,
  b = 45,
  c = 30;

if (a < b && c < b) {
  console.log("hamgiin ih too", b);
} else if (b < c && a < c) {
  console.log("hamgiin ih too", c);
} else if (b < a && c < a) {
  console.log("hamgiin ih too", a);
}

//bodlogo 4

let d = 12,
  e = 45,
  f = 30;

if (d < e && d < f) {
  console.log("hamgiin baga too", d);
} else if (e < f && e < d) {
  console.log("hamgiin baga too", e);
} else if (f < d && f < e) {
  console.log("hamgiin baga too", f);
}

//bodlogo 5

let month = 8;
let season;

if (month === 1) {
  console.log("winter");
} else if (month === 2) {
  console.log("spring");
} else if (month === 3) {
  console.log("spring");
} else if (month === 4) {
  console.log("spring");
} else if (month === 5) {
  console.log("summer");
} else if (month === 6) {
  console.log("summer");
} else if (month === 7) {
  console.log("summer");
} else if (month === 8) {
  console.log("autmn");
} else if (month === 9) {
  console.log("autmn");
} else if (month === 10) {
  console.log("autmn");
} else if (month === 11) {
  console.log("winter");
} else if (month === 12) {
  console.log("winter");
} else {
  console.log("tanii oruulsan toond tohiroh utga");
}

//bodlogo 6

let h = 85;
let i = 75;
let g = 96;
let k = 69;

let sum = 0;

if (h > 80) {
  sum = sum + h;
}
if (i > 80) {
  sum = sum + i;
}
if (g > 80) {
  sum = sum + g;
}
if (k > 80) {
  sum = sum + k;
}
console.log("niilber", sum);

//bodlog 8

let bat = 67;
let ochir = 59;

if (bat < 60) {
  console.log("mash muu");
} else if (bat >= 60 && bat < 70) {
  console.log("hangalttai");
} else if (bat >= 70 && bat < 80) {
  console.log("hangalttai");
} else if (bat >= 80 && bat < 90) {
  console.log("hangalttai");
} else if (bat >= 90 && bat < 100) {
  console.log("hangalttai");
} else {
  console.log("1-100 dotor oruulna uu");
}

//loop bodlogo 1
let i2 = 0;
for (let too = 0; too <= 100; too++) {
  i2 = i2 + too;
}

console.log("sum:", i2);
