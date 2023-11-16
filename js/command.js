const userName = prompt("inserisci il tuo nome");
const userSurname = prompt("inserisci il tuo cognome");
const userColor = prompt("inserisci il tuo colore preferito");

let info = `${userName}${userSurname}${userColor}23`;


document.getElementById("mio_id").innerHTML = info;