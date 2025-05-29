let inputText = document.getElementById("inputText")
let toUpper = document.getElementById("toUpper")
let toLower = document.getElementById("toLower")
let result = document.getElementById("result")
let toCapitalize = document.getElementById("toCapitalize")



toUpper.addEventListener("click" , function(event){
    event.preventDefault()

    let matn = inputText.value;
    let natija = matn.toUpperCase();
    result.textContent = natija;

})

toLower.addEventListener("click" , function(event){
    event.preventDefault()

    let matn = inputText.value;
    let natija = matn.toLowerCase();
    result.textContent = natija;
    
})

