// console.log("student", student.gender);
// console.log("name", student.name);

function studentInfo(student) {
  return student.name + student.gender;
}

let studentData = {
  name: "Temuulen",
  phone: "9977",
  gender: "male",
};
console.log(studentInfo(studentData));

function studentsage(students) {
  for (k = 0; k < students.length; k++) {
    console.log(students[k].age);
  }
}

let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
    points: 70,
  },
  {
    name: "Индра",

    age: 19,

    gender: "female",

    points: 50,
  },

  {
    name: "Хатнаа ",

    age: 21,

    gender: "male",

    points: 99,
  },

  {
    name: "Тэмүүлэн",

    age: 23,

    gender: "male",

    points: 55,
  },

  {
    name: "Намуун",

    age: 23,

    gender: "female",

    points: 85,
  },
];
studentsage(students);
// console.log(students[k].age);

//1 

let a = 4
let b = 8
let max = a > b
function greater(a, b) {
  
  return max
  console.log("ih toon", max)
}
console.log("ih toon", max)