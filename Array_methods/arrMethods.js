let fruits = ["Olma", "Banan", "Gilos", "olcha"];


// Arrayni oxiriga qoshib qoyadi...
fruits.push("Gilos");
console.log(fruits); // ["Olma", "Banan", "Gilos"]

let removed = fruits.pop(); // Massiv oxiridan elementni olib tashlash
console.log(fruits);

let initialRemoved = fruits.shift(); // Massiv boshidan elementni olib tashlash
console.log(fruits);

let initialAdd = fruits.unshift("Nok"); // Array boshiga elemnt qoshadi 
console.log(fruits);

let moreFruits = ["Nok","Qulpnoy","Uzum"]; // Ikkta arrayni qoshib beradi 
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

//!Array metodlari har safar ishlaganda natija yangilanadi, chunki ba’zilari asosiy massivni o‘zgartiradi, ba’zilari esa yangi massiv qaytaradi.

let sliced = fruits.slice(1,3); // Arraydan qism ajratib oladi
console.log(sliced);

let spliced = fruits.splice(1, 1, "Qovun"); // arraydan elemntni olib tashalab orniga yangisini qo'shadi
console.log("O'zgartirilgan massiv:", fruits);
console.log("Olib tashlangan element(lar):", spliced);


 
console.log(fruits.indexOf("Gilos")); // 2  // Elementni topib, uning indeksini qaytarish
console.log(fruits.indexOf("Tarvuz")); // -1 (topilmadi)

let numbers = [1, 2,3,4,5]; // Elementni oxiridan boshlab qidirish
console.log("Oxiridan hisoblaganda chiqgan natija:", numbers.lastIndexOf(2)); // 1
console.log("Oxiridan hisoblaganda chiqgan natija:",numbers.lastIndexOf(5)); // -1 (topilmadi)

let reversing = numbers.reverse(); //Massivni teskari tartibga o‘girish
console.log(numbers);

console.log(fruits.includes("Banan"));  // Massiv ichida element bor yoki yo‘qligini tekshirish
console.log(fruits.includes("Nok")); 

fruits.sort(); // Arrayni atratiblab beradi (alifbo yoki raqam boyicha)
console.log(fruits)
numbers.sort();
console.log(numbers)



