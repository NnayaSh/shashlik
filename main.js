const svin = document.querySelectorAll('#svin')
const cow = document.querySelectorAll('#cow')
const baran = document.querySelectorAll('#baran')
const chicken = document.querySelectorAll('#chiken')
const veg = document.querySelectorAll('#veg')
const submit = document.querySelector('#submit')
const input1 = document.getElementById('input1')
const resultElement = document.querySelector('#result')
const resultMyaso = document.querySelector('#type-of-myaso')
const noalco = document.querySelector('#noalco')
const yesalco = document.querySelector('#yesalco')
const alcoAm = document.querySelector('alco')

let peopleAmount = 10;

input1.addEventListener('input', function(){
    console.log(parseInt(input1.value))
    peopleAmount = parseInt(input1.value)
})

let myaso = 0;
let typeOfMyaso = "";

let myasoRadios = document.getElementsByName("myaso");
myasoRadios.forEach(function(myasoRadio) {
    myasoRadio.addEventListener('change', function() {
        let myasoSelected = Array.from(myasoRadios).find(radio => radio.checked);
        myaso = parseInt(myasoSelected.value);
        typeOfMyaso = myasoSelected.dataset.name;
        console.log(myaso);
    })
})

let golod = 0;
let golodRange = document.getElementsByName("golod")[0];

golodRange.addEventListener('change', function() {
    let golod = parseInt(golodRange.value);
    console.log(golod);
});


let time = 0;
let timeRadios = document.getElementsByName("time");
timeRadios.forEach(function(timeRadio) {
    timeRadio.addEventListener('change', function() {
        let timeSelected = Array.from(timeRadios).find(radio => radio.checked);
        time = parseInt(timeSelected.value);
        console.log(time);
    })
})

const alcoJoke = document.getElementById("yesalco");
const alcoNoJoke = document.getElementById("noalco");
const timeDolgo = document.getElementById("dolgo");
const timeNedolgo = document.getElementById("nemnogo");

    alcoJoke.addEventListener("change", function() {
        if (alcoJoke.checked) {
            timeDolgo.checked = true;
        }
    });

alcoNoJoke.addEventListener("change", function() {
        if (alcoNoJoke.checked) {
            timeNedolgo.checked = true;
        }
    });

let alco = 0;
let alcoRadios = document.getElementsByName("alco");
alcoRadios.forEach(function(alcoRadio) {
    alcoRadio.addEventListener('change', function() {
        let alcoSelected = Array.from(alcoRadios).find(radio => radio.checked);
        alco = parseInt(alcoSelected.value);
        console.log(alco);
    })
})

document.getElementById("submit").addEventListener("click", function() {
    const sum = (peopleAmount * (myaso + golod + time + alco) / 1000);
    resultElement.textContent = sum;
    resultMyaso.textContent = typeOfMyaso;
     })
