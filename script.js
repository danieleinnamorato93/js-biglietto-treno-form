//Preparazione: check JS / richiamo elementi nel dom

console.log('JS OK')
const name = document.querySelector ('name');
const kms = document.querySelector ('kms');
const age = document.querySelector ('age');
const button = document.querySelector ('button');
const paragraph = document.querySelector ('p');

//







/*const totalElement= document.getElementById('total');
const discountElement= document.getElementById('discount-message');

const pricePerKm = 0.21;

const priceMessage = 'il tuo biglietto costa €';

let discount = null ;
const age = parseInt(prompt ('Quanti anni hai?', 30));
const kms =  parseInt(prompt ('Quantikilometri vuoi percorrere?',100));
console.log ('kms', kms);
console.log ('age', age);

const basePrice = kms * pricePerKm ;
let finalPrice = basePrice ;

if (age > 65) {
    finalPrice *= 0.6;
} else if (age < 18) {
    finalPrice *= 0.8;
}

if (discount) {
    const discountElement = document.getElementById ('discount-message');
    const discountMessage = `Hai ricevuto  uno sconto del ${discount}%`;
    discountElement.innerHTML = discountMessage ;
    const discount = (finalPrice / 100)* discount;
    finalPrice = finalPrice - discount ;
}

totalElement.innerText = priceMessage + finalPrice.toFixed(2) ; */
