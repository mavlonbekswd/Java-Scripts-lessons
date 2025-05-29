// Problem 1: User Profile
// let user = {
// 	name: "Mavlono",
// 	age: 20,
// 	country: "Uzbekistan"
// };

// console.log(user);

// let name = "Mavlono";
// let myage = 20;
// let isStudent = true;
// console.log(name, myage, isStudent);


// // Problem 2: Type Check
// let score = 85;
// console.log(typeof score); // number

// //Problem 3: Reassignment Check


// const pi = {
// 		value: 3.14
// }
// pi.value = 4;
// console.log(pi.value); 

// //Problem 4: Add Two Numbers
// let num1 = 5;
// let num2 = 10;
// let sum = num1 + num2;
// console.log(sum); // 15

// // Problem 5: Full Name Builder

// let firstName = "Mavlonbek";
// let lastName = "Sultanbekov"
// let fullName = firstName + " " + lastName;
// console.log(fullName); // Mavlonbek Sultanbekov



// const car = { brand: "BMW", color: "black" };
// let changedcolor = car.color;
// car.color = "red";
// console.log(changedcolor); // black

// const son1 = 100
// const son2 = son1+100

// console.log(son2); // 200
// console.log(son1); // 100

// const obj1 = { score: 100 };
// const obj2 = obj1;

// console.log(obj2.score); // 100


// let birthYear = +prompt("Enter your birth year:");

// let currentYear = +prompt("Enter the current year:");


//   let age = currentYear - birthYear;

//   if (age >= 0 && age <= 12) {
//     console.log(`You are ${age} years old. You are a Child.`);
//   } else if (age >= 13 && age <= 17) {
//     console.log(`You are ${age} years old. You are a Teenager.`);
//   } else if (age >= 18 && age <= 59) {
//     console.log(`You are ${age} years old. You are an Adult.`);
//   } else if (age >= 60) {
//     console.log(`You are ${age} years old. You are a Senior.`);
//   } else {
//     console.log("Age calculation is invalid.");
//   }

// let n = 1;
// let sum = 3;
// while (n <= 10){
//   sum = sum * n;
//   console.log(n);
//   n = n + 3;
// }

// let price = +prompt("Mahsulot narxini kiriting:", "" );
// let discount = +prompt("Chegirma foizini kiriting: ", "");

// function calculateDiscount(price, discountPercent) {
//   let discount = (price * discountPercent) / 100
//   let finalPrice = price - discount
//   return finalPrice
// }
// let natija = calculateDiscount(price, discount)
// console.log(natija)









const form = document.getElementById("gradeForm");

form.addEventListener("submit", function(event) { 
  event.preventDefault();

  // 1. Qiymatlarni olish
  const math = +document.getElementById("math").value;
  const english = +document.getElementById("english").value;
  const history = +document.getElementById("history").value;
  const science = +document.getElementById("science").value;

  // 2. Massivga solish
  let grades = [math, english, history, science];

  // 3. O‘rtachani hisoblash
  let average = calculateAverage(grades);

  // 4. Harf bahoni olish
  let grade = getGrade(average);

  let message = inspireMessage(grade);

  // 5. Natijani chiqarish
  document.getElementById("result").innerText =
  "Sizning bahoyingiz: " + grade + " (" + Math.round(average) + ")\n" + message;

});

// ------------- Funksiyalar formdan tashqarida --------------

function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum = sum + grades[i];
  }
  let average = sum / grades.length;
  return average;
}

function getGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}
function inspireMessage (grade){
if (grade === "A") {
  return "Ajoyib ish! Barakalla!";
} else if (grade === "B") {
  return "Zo‘r, lekin A olish uchun yana harakat qil!";
} else if (grade === "C") {
  return"Yaxshi, lekin kuchliroq o‘qisang bo‘ladi!";
} else {
  return "Ko‘proq mashq qil, ishonaman sening kuching bor!";
}
}
