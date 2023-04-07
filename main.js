/*
Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€ l’ora
se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€ l’ora
se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60€

*/

let discountList = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let isdiscountCorrect = false;

const richiestaPreventivo = document.getElementById("preventivo");
richiestaPreventivo.addEventListener("click", elaboraPreventivo);

