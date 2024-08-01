console.log('JS OK');

const nameInput = document.querySelector('#name');
const kmsInput = document.querySelector('#kms');
const ageSelect = document.querySelector('#age');
const form = document.querySelector('#ticket');
const paragraphElement = document.querySelector('#paragraph');

const pricePerKm = 0.21;

// Gestione Eventi: recupero valore input
form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = nameInput.value;
    const kms = parseInt(kmsInput.value, 10);
    const selectedAgeText = ageSelect.options[ageSelect.selectedIndex].text; // Ottieni il testo dell'opzione selezionata


    
    const basePrice = kms * pricePerKm;
    let finalPrice = basePrice;

    
    if (ageSelect.value === '3') { 
        finalPrice *= 0.6;
    } else if (ageSelect.value === '1') {
        finalPrice *= 0.8;
    }

 
    finalPrice = finalPrice.toFixed(2);

    // Output sulla pagina
    paragraphElement.innerHTML = `
        <strong>Nome e Cognome:</strong> ${name}<br>
        <strong>Kilometri da percorrere:</strong> ${kms}<br>
        <strong>Età:</strong> ${selectedAgeText}<br>
        <strong>Prezzo del biglietto:</strong> €${finalPrice}
    `;
});








