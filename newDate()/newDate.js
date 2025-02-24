
//Get current date and time
let now = new Date();

let today = now.getDate()  < 10 ? '0' + now.getDate() : now.getDate() ; //Agar kun 10 dan kichik bo‘lsa, uning oldiga 0 qo‘shiladi. yoki  Agar kun 10 yoki undan katta bo‘lsa → oddiy raqam qaytariladi.
let month = now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth() + 1; // +1 yozilishidan maqsad getMonth() 0dan boshlab 11 gacha sanaydi.
let year = now.getFullYear();
console.log(today); 
console.log(month); 
console.log(year);
console.log(now.getDate());      // 22
console.log(now.getDay());       // 6 (Shanba)
console.log(now.getHours());     // 10
console.log(now.getMinutes());   // 30
console.log(now.getSeconds());   // 0
console.log(now.getMilliseconds()); // 123
console.log(now.getTime()); // 1769145000000 (millisekund)




let futureDate = new Date(1000000000000); // 1 trillion millisekund (1T ms)
console.log(futureDate);

//
let epochTime = new Date(0); // 1970 yilning boshlanishi
console.log(epochTime);



//! Set()

let myDate = new Date();
myDate.setFullYear(2030);
myDate.setMonth(5) < 10 ? '0' + myDate.setMonth(5) : myDate.setMonth(5);  // Iyun (0 dan boshlanadi)
myDate.setDate(15);

console.log(myDate);

