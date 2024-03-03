//alert("Codice sconto: caffe10"); //da decommentare

const coffeeTypePrices = {
    espresso: 2.50,
    americano: 3.00,
    cappuccino: 3.50
};

let prezzoFinale = 0;

let caffe = document.getElementById('caffe')
let zucchero = document.getElementById('zucchero')
let latte = document.getElementById('latte')
let panna = document.getElementById('panna')
let aroma = document.getElementById('aroma')

let button = document.getElementById('button')

button.addEventListener('click',function(){
    console.log(caffe.value)
})

