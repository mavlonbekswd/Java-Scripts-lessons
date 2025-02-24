//!Array
 
const [olma , gilos, ... boshqaMevalar] = ['olma🍏', 'gilos🍒', 'nok🍐', 'olcha🍓'];
console.log(olma,gilos, boshqaMevalar);


// 
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;
//...rest arrayning qolgan barcha elementlarini yangi array sifatida oladi.
console.log(first, second, rest);  

//
const colors = ["red", "green", "blue", "yellow"];

// Ikkinchi elementni olish, birinchisini tashlab ketish
const [, secondColor] = colors;
// ',' birinchi elementni tashlab yuboradi.
console.log(secondColor); // "green"


//! Object


import { car } from "../obeject.js";
// Destructuring
const {price, model, color} = car

console.log(price, model, color); 

// ikkinchi usuli 
const {country, city, street} = {
    
    country: 'USA',
    city: 'New York',
    street: 'Broadway'
}
console.log(country, city, street);

// firstName ni name deb, lastName ni surname deb nomladik.
const person = {
    firstName: "Ali",
    lastName: "Ahmedov",
    age: 25
};

// Kalit nomlarini o‘zgartirish
const { firstName: name, lastName: surname } = person;

console.log(name, surname);


//age obyekt ichida yo‘q, shuning uchun default qiymat sifatida 18 berildi.
const phone = {
    apple: "Iphone",
};

// Agar `age` obyekt ichida bo‘lmasa, 18 bo‘lsin
const { apple, type = 16 } = phone;

console.log(apple, type) // 16 (default qiymat)


console.log(new Date());

