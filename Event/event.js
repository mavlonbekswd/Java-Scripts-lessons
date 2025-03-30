let btn1 = document.createElement('button');
btn1.innerText = "1";
document.body.appendChild(btn1); // body oxiriga qo‘shiladi

let btn2 = document.createElement('button');
btn2.innerText = "2";
document.body.appendChild(btn2); // yoniga qo‘shiladi

btn1.addEventListener('click' , event =>{
    event.target.style.backgroundColor = 'red'
    event.target.style.width = '100px'
    event.target.innerHTML='<h1>Hello</h1>'
    event.target.innerHTML = '🔥 Hello!';


})

const link = document.querySelector('a')
link.addEventListener('click', event => {
    event.preventDefault()
    console.log('click');
    
    
})

let btn = document.querySelectorAll('button')

btn.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        console.log(index+1);
    },
    {once: true}
) 
    
})


