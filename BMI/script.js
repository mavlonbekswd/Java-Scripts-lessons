const  bmiForm = document.getElementById("bmiForm")
const weight = document.getElementById("weight")
const height = document.getElementById("height")
const bmiResult = document.getElementById("bmiResult")

let oldData = localStorage.getItem("bmiInfo");
if (oldData) {
  let data = JSON.parse(oldData);
  bmiResult.textContent = `BMI: ${data.bmi} — ${data.tavsif}`;
}

bmiForm.addEventListener("submit", function(e){
    e.preventDefault();
    let w = +weight.value;
    let h = +height.value / 100; // metrga o‘tkazish!
    let bmi = w / ( h * h )

    result = Math.round(bmi * 10) / 10
    bmiResult.textContent = "Sizning BMI: " + result;

   let tavsif = "";  // Tavsifni alohida o‘zgaruvchida saqlaymiz

if (result < 18.5 ) {
    tavsif = "ozib ketgan";
} else if (result < 25 ){
    tavsif = "sog'lom";
}  else if (result < 30) {
   tavsif = "Ortiqcha vazn";
} else {
   tavsif = "Semizlik";
}

let data = {
  bmi: result,
  tavsif: tavsif
};
localStorage.setItem("bmiInfo", JSON.stringify(data));


bmiResult.textContent = `BMI: ${result} — ${tavsif}`;
})


