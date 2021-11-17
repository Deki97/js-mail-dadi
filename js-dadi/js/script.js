// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero random da 1 a 6 per il giocatore
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log('Il numero generato dal giocatore risulta: ' + userNumber);

// Genero un numero random da 1 a 6 per il computer
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log('Il numero generato dal computer risulta: ' + computerNumber);

// Confronto il numero del giocatore con quello del computer
// Comunico chi ha vinto, ossia chi ha il numero più alto tra il giocatore e computer, oppure se sono pari
if(userNumber > computerNumber) {
    alert('Ha vinto il giocatore, perchè ' + userNumber + ' è maggiore di ' + computerNumber);
} else if (userNumber < computerNumber) {
    alert('Ha vinto il computer, perchè ' + computerNumber + ' è maggiore di ' + userNumber);
} else {
    alert('Non ha vinto nessuno dei due, perchè i numeri sono uguali');
}

