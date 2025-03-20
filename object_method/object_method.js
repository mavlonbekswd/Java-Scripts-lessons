let user = { name: "Mavlono", age: 20, country: "UK", university:"ARU",  faculty:"Softwear ingenering"};

console.log(Object.keys(user)); // Obyektning barcha kalitlarini olish

console.log(Object.values(user)); // Obyektning faqat valuelarini oladi

console.log(Object.entries(user)); // obeject ichidagi key va value larni alohida alohida qilib bo'lib tashlaydi

let details = {isLove : "Hadicha", relgion: "Islam"} //Obyektlarni birlashtirish
console.log(Object.assign(user, details)); //! Bu metod bir obyektning barcha xususiyatlarini boshqa obyektga ko‘chirib beradi.

let entries = [["name", "Mavlono"], ["age", 18], ["country", "UK"]];
console.log(Object.fromEntries(entries)); //[kalit, qiymat] juftliklari massivini obyektga aylantirish

let jsonString = '{"name":"Mavlono","age":18}';

let newUser = JSON.parse(jsonString);
console.log(newUser);


