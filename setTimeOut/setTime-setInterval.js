// LocalStorage filedan userni import qilib time intervalga qo'shdik va uni har uch sekunddan ageni birga oshirip logda va sotoageda korsatdik. 
import {user} from '../localStorage.js';
const timeInterval = setInterval(() => {
    console.log(user);
    user.age++;
    localStorage.setItem("user", JSON.stringify(user));
    
}, 3000);
// bu yerda setTimeout dan foydalanib tepoadagi funksiyani 10 s dan so'ng to'xtadadigan qildik. 
setTimeout(() => {
    clearInterval(timeInterval);
    console.log('Interval stopped');
}, 10000)

 
// setInterval(() => {
//     let now = new Date();
//     console.log(now.toLocaleTimeString());
// }, 3000);


function repeatMessage() {
    console.log("Bu har 2 sekundda ishlaydi.");
    setTimeout(repeatMessage, 2000);
}

repeatMessage();


