// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Creo un array di email
const listaMail = ['mario.rossi@gmail.com', 'giuseppe_verdi@gmail.com', 'federico2021@gmail.com', 'dejan97@libero.it', 'antonio_conte@libero.it'];

// Chiedo all'utente di inserire una mail per verificare se è presente in lista
const userMail = prompt('Inserisci la tua email');
// console.log('La mail che hai inserito risulta: ' + userMail);


// LOGICA
let mailTrovata = false;
// Scorro l'array delle mail
for(let i = 0; i < listaMail.length; i++) {
    const eMail = listaMail[i];
    // console.log(eMail);
    
    if(userMail === eMail) {
        mailTrovata = true;
    }
}

if(mailTrovata) {
    alert('Caro utente, sei autorizzato ad accedere');
} else {
    alert('Caro utente, non sei autorizzato ad accedere');
}