// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// BONUS possibili:
// elaborazione dell’output come detto, più articolata del semplice prezzo;
// interfaccia un pò eleaorata con CSS.



const prezzoKm = 0.21;
const scontoMin = 0.8;
const etaMin = 18;
const scontoOver = 0.6;
const etaOver = 65;


// chiedo i km
let km = parseInt( prompt("Di quanti km vuoi fare il viaggio?"));
console.log("km:",km);

// chiedo eta
let eta = parseInt( prompt("Quanti anni hai?"));
console.log("eta:",eta);


// calcolo il prezzo di listino
let prezzo = (km * prezzoKm);




// sconto minorenne
if(eta < etaMin){
    prezzo = prezzo * scontoMin;
}
// sconto over
if(eta >= etaOver){
    prezzo = prezzo * scontoOver;
}




// output
document.getElementById("eta").innerHTML = 
`${eta}`;
document.getElementById("km").innerHTML = 
`${km}`;
document.getElementById("prezzo").innerHTML = 
`${prezzo.toFixed(2)}€`;

// il toFixed dice quante cifre tenere