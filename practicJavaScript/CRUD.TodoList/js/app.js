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


  // time 
  function getTime() {
    const now = new Date();
    const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
    const month = now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth();
    const year = now.getFullYear();



    //hours 
    const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();


    //month 
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month_title = now.getMonth();
    fullDay.textContent = `${day} ${months[month_title]}, ${year}`;

    hourEl.textContent = hours;
    minuteEl.textContent = minutes;
    
    return `${hours}:${minutes}, ${day}.${month}.${year}`
  }
  setInterval(getTime, 1000);

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
          <li ondblclick ="setCompleted (${i})" class="list-group-item d-flex justify-content-between ${item.completed == true ? 'completed' : ''}">
            ${item.text}
         <div class="todo-icons">
            <span class="opacity-50 me-2">${item.time}</span>
             <img src="./img/edit.svg" alt="edit icon" width="25" height="25" />
             <img  onclick = (deleteTodo(${i})) src="./img/delete.svg" alt="delete icon" width="25" height="25" />
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
            time: getTime(), 
            completed:false});
            console.log(todos);
            
        
    } else {
        showMessage('message-create', 'Please enter something...');
    }
  });

  // delete todo
  function deleteTodo(id) {
    // filter() – todos massivida har bir elementni tekshiradi va id ga teng bo‘lmaganlarni qoldiradi.
    const deletedTodos = todos.filter((item, i) => {
      // i !== id – agar indeks (i) berilgan id ga teng bo‘lsa, uni o‘chiradi.
      // Natija: id indeksiga teng bo‘lgan element o‘chirilgan yangi massiv (deletedTodos).
      return i!== id;
    })
    // todos o‘zgaruvchisi yangilanadi – eski ro‘yxatdan id dagi element o‘chirilgan bo‘ladi.
    todos = deletedTodos;
    setTodos();
    showTodos();
  };

  // setCompleted
  function setCompleted(id) {
    const completedTodos = todos.map((item, i) => {
      if(id === i) {
    return {...item, completed: item.completed == true ? false : true};
      } else {
      return {...item}
      }
    })
    todos = completedTodos;
    setTodos();
    showTodos();
  }

