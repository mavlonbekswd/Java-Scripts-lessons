
// Local Storage is a technology used by JavaScript to store data in the user's browser for a long time. This data does not disappear even after closing the browser or refreshing the page. It is part of the Web Storage API and works much faster and more efficiently than cookies.
//? JSON.stringify() is only used with setItem(), while JSON.parse() is used with getItem().




//Set Item 
const names =['Mario', 'Jerk','Oliver'];
//! JSON.stringify -- In JavaScript, localStorage can only store text (strings)

localStorage.setItem('names', JSON.stringify(names))

//Get Item
//!JSON.parse -- JSON.parse() converts JSON text back into an object or array.

const getNames = JSON.parse(localStorage.getItem('names'));
console.log(getNames);




export let user = {
    name: "Mavlono",
    age: 18,
    country: "UK"
};

// Obyektni JSON formatiga o‘girib, localStorage ga saqlaymiz
localStorage.setItem("user", JSON.stringify(user));

// JSON stringni olib, uni obyektga qayta o‘giramiz
let storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser.name);  // "Mavlono"
console.log(storedUser.age);   // 18
console.log(storedUser.country); // "UK"

