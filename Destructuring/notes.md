Destructuring – bu ES6 dagi o‘zgarmas array yoki obyektlarni qisqa va aniq usulda ajratib olish imkonini beruvchi JavaScript sintaksisi.


1. Array uchun misol:
const [olma , gilos, ... boshqaMevalar] = ['olma', 'gilos', 'nok', 'olcha'];
console.log(olma,gilos, boshqaMevalar);

... <= bu uchata nuqta Rest Operatorlari yani destructing qolgan malumotlarni birlashtirib beradi.va consolga nok bilan olchani array ichida chiqazadi...

Lekin chap tarafdagi array ichiga bir xil nom qo'yib bo'lmaydi yani [gilos, gilos] qilib.

2. Object uchun misol:

