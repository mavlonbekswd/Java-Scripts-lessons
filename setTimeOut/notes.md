setTimeout() va setInterval() – bu JavaScript da kechiktirilgan va takroriy bajariladigan kodlarni ishlatish uchun ishlatiladigan funksiyalar. Lekin ularning ishlash usuli farq qiladi.

1. setTimeout() – Kodni ma’lum vaqt o‘tib bajarish
setTimeout() funksiyasi belgilangan vaqt o‘tgandan keyin faqat bir marta bajariladigan kodni ishlatish uchun ishlatiladi.

setTimeout(function, delay);

function – Bajariladigan funksiya.
delay – Millisekundlarda belgilangan kechikish (1 sekund = 1000ms).

2. setInterval() – Kodni takroran bajarish
setInterval() funksiyasi belgilangan vaqt oralig‘ida kodni qayta-qayta bajarish uchun ishlatiladi.

Sintaksis:
javascript
Copy
Edit
setInterval(function, interval);
function – Bajariladigan funksiya.
interval – Har safar takrorlanadigan vaqt (millisekundlarda).

3. Amaliy foydalanish holatlari
✅ setTimeout() qachon ishlatiladi ❓
3 sekunddan keyin popup xabar chiqarish.
Foydalanuvchini bir necha sekunddan keyin boshqa sahifaga yo‘naltirish.
Qisqa kechikish bilan ma’lumotlarni yuklash.
✅ setInterval() qachon ishlatiladi ❓
Sanash vaqtini (timer) yaratish.
Soat yoki vaqtni har soniyada yangilash.
Sahifani avtomatik yangilash.

4. Xulosa 🧠
setTimeout() – Kodni faqat bir marta kechiktirib bajarish uchun ishlatiladi.
setInterval() – Kodni cheksiz marta, har oraliqda bajarish uchun ishlatiladi.
clearTimeout() va clearInterval() – Ularni bekor qilish uchun ishlatiladi.
Rekursiv setTimeout() – dinamik interval yaratish uchun foydalidir.
