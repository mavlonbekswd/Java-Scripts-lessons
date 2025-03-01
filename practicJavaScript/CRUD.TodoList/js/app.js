const formCreate = document.getElementById('form-create')
const formEdit = document.getElementById('form-edit')
const listGroupTodo = document.getElementById('list-group-todo')
// const messageCreate = document.getElementById('message-create')
const time = document.getElementById('time')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
/* time elements */
const fullDay = document.getElementById('full-day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const closeEl = document.getElementById('close')

//!check brinchi qiladigan ishimiz 
// Agar localStorage da "list" mavjud bo‘lmasa, kod todos = [] bo‘lishini ta’minlaydi.
// Bu usul localStorage dan ma'lumotlarni o‘qishda null yoki undefined bo‘lib qolishining oldini oladi.
  let todos = JSON.parse(localStorage.getItem('list')) ?  JSON.parse(localStorage.getItem('list')) : [];
  // osonroq yo'li 
  // let todos = JSON.parse(localStorage.getItem('list')) || [];

  if (todos.length) showTodos()

  // set todos
    function setTodos (){
        localStorage.setItem('list', JSON.stringify(todos))
        
    }

// show todos on screen
 function showTodos() {
    const todos = JSON.parse(localStorage.getItem('list'))
    listGroupTodo.innerHTML = ''; // list-group-todo uchun barcha elementlar o‘chiriladi.
    todos.forEach((item,i) =>
    {
        listGroupTodo.innerHTML +=
        `
          <li class="list-group-item d-flex justify-content-between">
            ${item.text}
         <div class="todo-icons">
            <span class="opacity-50 me-2">01.03.2025</span>
             <img src="./img/edit.svg" alt="edit icon" width="25" height="25" />
             <img src="./img/delete.svg" alt="delete icon" width="25" height="25" />
           </div>
         </li>
        ` 
 })

 }



  // show error message
  function showMessage(where, message) {
    document.getElementById(`${where}`).textContent = message

    setTimeout(() => {
      document.getElementById(`${where}`).textContent = ''
    }, 3000)
  }

  // get todos from
  formCreate.addEventListener('submit', (e) => {
    
    e.preventDefault(); // qayta yuklanishning oldini oladi, ya’ni sahifa o‘z joyida qoladi.
    const todoText = formCreate['input-create'].value.trim(); // input ichidagi foydalanuvchi kiritgan matnni oladi va todoText o‘zgaruvchisiga saqlaydi.
    // JavaScript-da trim() metodi string (matn) ichidagi boshi va oxiridagi bo‘sh joylarni olib tashlash uchun ishlatiladi.
    // formCreate['input-create'].value = ''; // inputni bo'sh qilish uchun ishlatiladi yokida..
    formCreate.reset();
    
    setTodos(); // localStoragega saqlanish uchun ishlatiladi.
    showTodos(); // ekranda ko'rinish
    if (todoText.length) {
        todos.push({
            text: todoText.trim(), 
            time: new Date(), 
            completed:false});
            console.log(todos);
            
        
    } else {
        showMessage('message-create', 'Please enter something...');
    }
  });

