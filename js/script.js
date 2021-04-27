// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Chiedere il numero di km da percorrere
var numeroKm = parseInt(prompt("Quanti km sono da percorrere?"));
document.getElementById("distance").innerHTML = numeroKm;

//Chiedere l'eta' del passegero
var etaPassegero = parseInt(prompt("Eta' del passegero?"));
document.getElementById("age").innerHTML = etaPassegero;

//Prezzo del biglietot base
var prezzoKm = 0.21;
var prezzoBaseBiglietto = prezzoKm * numeroKm;
console.log(prezzoBaseBiglietto);

//Applicazione parametri di sconto
var prezzoScontato

if(etaPassegero < 18) {
    prezzoScontato = prezzoBaseBiglietto * (1 - 0.2);
    console.log(prezzoScontato);
} else if(etaPassegero > 65) {
    prezzoScontato = prezzoBaseBiglietto * (1 - 0.4);
    console.log(prezzoScontato);
} else {
    prezzoScontato = prezzoBaseBiglietto;
    console.log(prezzoScontato);
}

//Arrotondamento prezzo
var prezzoFinale = prezzoScontato.toFixed(2);

//Prezzo finale in pagina
document.getElementById("price").innerHTML = prezzoFinale;