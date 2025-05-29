// Form elementini tanlab olamiz
const productForm = document.getElementById("productForm")

// Form submit bo‘lganda ishlaydigan funksiyani yozamiz
productForm.addEventListener("submit", function(event) { 
     // Sahifa yangilanib ketmasligi uchun
  event.preventDefault();

  // Form ichidagi select va input elementlarini tanlab olamiz
    const product = document.getElementById("product")
    const quantity = document.getElementById("quantity")


  // Foydalanuvchi tanlagan mahsulotning qiymatlarini olamiz
    let productName = product.value; // mahsulot id yoki nomi
    let productPrice = product.selectedOptions[0].dataset.price; // narxi (data-price dan)
    let productLabel = product.selectedOptions[0].textContent;// selectdagi matn

     // Yangi mahsulot obyektini yaratamiz
    let products = {
   name: productName,
   price: +productPrice,
   quantity: +quantity.value
}



  // Yangi mahsulotni cart arrayiga qo‘shamiz
cart.push(products)

  // Savatni ekranga chiqaruvchi funksiyani chaqiramiz
renderCart()
    
});


// Savat (cart) arrayi — barcha tanlangan mahsulotlar shu yerda saqlanadi
let cart = [];

// Savatni ekranga chiqaradigan funksiya
function renderCart () {

    // Savat ro‘yxatini (ul) va jami narx chiqadigan p elementini tanlaymiz
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

  // Har safar chiqarishda eski natijalarni tozalaymiz
    cartItems.innerHTML = ""
    let total = 0  // jami narx uchun boshlang‘ich qiymat

      // Savatdagi barcha mahsulotlarni aylantiramiz
for (let i = 0; i < cart.length; i++){
    let item = cart[i];
    

     // Yangi li element yaratib, mahsulot ma’lumotlarini unga yozamiz
    let li = document.createElement("li");
    li.textContent = `${item.name} x${item.quantity} = ${item.price * item.quantity} so'm`;
    cartItems.appendChild(li);
    // Jami narxga qo‘shamiz
    total += item.price * item.quantity;
}
 // Jami narxni chiqaramiz
  totalPrice.textContent = "Jami narx: " + total + " so'm";

}


