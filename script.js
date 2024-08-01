//Preparazione: check JS / richiamo elementi nel dom

console.log('JS OK')
const nameInput = document.querySelector ('#name');
const kmsInput = document.querySelector ('#kms');
const ageInput = document.querySelector ('#age');
const button = document.querySelector ('button');
const paragraphElement = document.querySelector ('p');
const form = document.querySelector('#ticket');

console.log('name', nameInput)
console.log('kms', kmsInput)
console.log('age', ageInput)

const pricePerKm = 0.21;
let discount = null ;

//Gestione Eventi: recupero valore input
form.addEventListener('submit' , function (e) {
    e.preventDefault();

const name = nameInput.value  ;
const kms = parseInt(kmsInput.value);
const age = parseInt(ageInput.value) ;

//Elaborazione dati

const basePrice = kms * pricePerKm ;
let finalPrice = basePrice ;

if (age > 65) {
    finalPrice *= 0.6;
} else if (age < 18) {
    finalPrice *= 0.8;
}

if (discount) {
    
    const discount = (finalPrice / 100)* discount;
    finalPrice = finalPrice - discount ;
   
}
    finalPrice= finalPrice.toFixed(2);
    
    //Output sulla pagina:
    paragraphElement.innerHTML= ` Nome e Cognome:</strong> ${name}
    <strong>Kilometri da percorrere:</strong> ${kms}
    <strong>Età:</strong> ${age}
    <strong>Sconto:</strong> ${discount}
    <strong>Prezzo del biglietto:</strong> € ${finalPrice} `;
                                
}
)








