let text = "   JavaScript    ";

console.log(text.length); // matnda nechta harf borligini ko'rsatadi.

console.log(text.toUpperCase()); // matndagi barcha harflarni katta qiladi.

console.log(text.toLowerCase()); // matndagi barcha harflarni kichik qiladi..

console.log(text.trim()); // matndagi boshi va ohiridagi bo'sh joylarni olib tashlaydi...

let string = "MavlonoSodiqSultoniy"
console.log(string.slice(0, 6)); // Mavlon harfilarida hisoblab kesib berdi agar biz musbat son kiristsak
console.log(string.slice(-20));

let newText = "Hello world!"; // Matndagi birinchi uchragan so‘zni almashtirish
console.log(newText.replace("world", "JavaScript")); // "Hello JavaScript!"

 //! Eslatma: replace() faqat birinchi mos kelganini almashtiradi.

//Agar hamma mos kelgan so‘zlarni almashtirmoqchi bo‘lsangiz:
let newString = "Hello world, world is beautiful!";
console.log(newString.replace(/world/g, "JavaScript"));  // "Hello JavaScript, JavaScript is beautiful!"

console.log(newString.replaceAll("world", "mars"));  // "banana banana orange banana"

let fruits = "Olma, Banan, Gilos";
fruits.split(", ");
console.log(fruits); // ["Olma", "Banan", "Gilos"]


console.log(fruits.charAt(7)); // matndagi harfini oladi agar berilgan raqamda harf bo'lmasdan space bo'lsa ham olaveradi 

console.log(fruits.includes("Olma"));// Matnda so‘z bor yoki yo‘qligini tekshirish
console.log(fruits.includes("Qovun"));

console.log(newString.repeat( 4,)); //n marotaba takrorlaydi..









