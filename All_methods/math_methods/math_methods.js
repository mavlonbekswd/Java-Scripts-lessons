console.log(Math.abs(-10)); // 10 // bu Math.abs bu sonni modulini olish
console.log(Math.abs(5));   // 5
console.log(Math.abs(0));   // 0

console.log(Math.round(4.5)) // bu sonni eng yaqiniga yaxlitlash
console.log(Math.round(4.2))

console.log(Math.floor(4.9)); // 4 bu sonni pastga yaxlitlab beradi
console.log(Math.floor(4.1)); // 4
console.log(Math.floor(-4.9)); // -5

console.log(Math.ceil(4.1)); // 5 // bu sonni yuqoriga yaxlitlab beradi
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(-4.1)); // -4

let number = 5.6
let newNumber = 6

console.log(Math.trunc(number)); // sonni kasr qismini olib tashlash.

console.log(Math.pow(number, newNumber)) // Bu metod x sonini y darajaga ko‘taradi (x^y).

let x = 16
let y = 25

console.log(Math.sqrt(x)) // sonni ildizdan chiqaradi
console.log(Math.sqrt(y))

console.log(Math.cbrt(27)); // 3 // Sonning kub ildizini olish
console.log(Math.cbrt(8));  // 2
console.log(Math.cbrt(64)); // 4

console.log(Math.max(10, 20, 5, 40, 30)); // 40 eng kotta sonni olish
console.log(Math.max(-5, -1, -10, -20)); // -1
console.log(Math.max(3, 3.5, 3.2)); // 3.5

console.log(Math.min(10, 20, 5, 40, 30)); // 5 // Eng kichik sonni olish
console.log(Math.min(-5, -1, -10, -20)); // -20
console.log(Math.min(3, 3.5, 3.2)); // 3

//

console.log(Math.random()); // 0.4321 (har safar turlicha) // Tasodifiy son yaratish
console.log(Math.random()); // 0.7892

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

