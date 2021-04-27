// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Chiedere il numero di km da percorrere
var numeroKm = parseInt(prompt("Quanti km sono da percorrere?"));
console.log(numeroKm);
document.getElementById("distance").innerHTML = numeroKm;

//Chiedere l'eta' del passeggero
var etaPassegero = parseInt(prompt("Eta' del passegero?"));
console.log(etaPassegero)
document.getElementById("age").innerHTML = etaPassegero;