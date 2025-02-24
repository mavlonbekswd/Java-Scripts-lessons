new Date() — JavaScript-da sana va vaqt bilan ishlash uchun standart obyekt. U yordamida joriy sana va vaqtni olish, sana yaratish, vaqtni o‘zgartirish, va formatlash mumkin.
 
1.  Misol:

let now = new Date();

let day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
let month = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1);
let year = now.getFullYear();

let formattedDate = `${year}-${month}-${day}`;
console.log(formattedDate);

2. date formatlari: 

getFullYear()	=> Yil	2025
getMonth()	 => Oy (0-11)	1 (Fevral)
getDate()	 => Kun (1-31)	22
getDay()	 => Hafta kuni (0-6)	6 (Shanba)
getHours()	 => Soat (0-23)	10
getMinutes()	 => Daqiqa (0-59)	30
getSeconds()	 => Sekund (0-59)	0
getMilliseconds() => 	Millisekund (0-999)	0
getTime()   =>   Millisekund (1970 dan boshlab)	1769145000000



3. Sana obyektining qiymatlarini o‘zgartirish uchun set () metodlaridan foydalaniladi.
