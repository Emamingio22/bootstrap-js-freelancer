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
richiestaPreventivo.addEventListener("click", moneyCounter);



//funzione richiamata dal tasto Submit
function moneyCounter() {
    //funzione che trova il value del Lavoro richiesto in Type of work: estraiValueLavoro();

    //estrarre le ore preventivate
    let tariffatore = estraiValueLavoro();
    let moltiplicatore = calcolaTariffa(tariffatore); // calcola la tariffa in base al valore di TYpe of Work
    //contare ore per tariffa oraria
    let oreLavoro = estraiOreLavoro();
    //fare il calcolo della tariffa
    let spesaDelCliente = eseguiPreventivo(oreLavoro, moltiplicatore);
    console.log(spesaDelCliente);

    let codiceScontoInserito = document.getElementById("codiceSconto");
    convalidaCodici(codiceScontoInserito);

if (isCodiceCorretto == true) {
    spesaDelCliente = (spesaDelCliente * 0.75);
}else{
    alert("Il codice inserito non è valido");
}

    document.getElementById("output").innerHTML = spesaDelCliente;
}
//-----------------------------------------





function convalidaCodici(scontoInserito) {

    for (let i=0; i < listaCodiciSconto.length; i++) {
        if (listaCodiciSconto[i] == scontoInserito) {
            isCodiceCorretto=true;
            break; 
        }
    }
}



function estraiValueLavoro() {
    let valueDelLavoro = parseInt(document.getElementById("tipoDiLavoro").value);
    console.log(valueDelLavoro);
    console.log(typeof "valueDelLavoro");
    valueDelLavoro = parseInt(valueDelLavoro);
    console.log(typeof "valueDelLavoro");
    return valueDelLavoro;
}
function estraiOreLavoro() {
    let tempoPreventivato = document.getElementById("tempoPreventivato").innerHTML;
    tempoPreventivato = parseInt(tempoPreventivato);
    console.log(tempoPreventivato);
    return tempoPreventivato;
    
}
function calcolaTariffa (workValue) {
    let tariffaOraria = 3;
    let input = parseInt(workValue);
    if (input == "1") {
        tariffaOraria = 20.5;
    }else if (input == "2") {
        tariffaOraria = 15.3;
    }else{
        tariffaOraria = 33.6;
    }
    console.log(tariffaOraria);
    return tariffaOraria;
    document.getElementById("output").innerHTML;
}
function eseguiPreventivo(tempo, tariffa) {
    let preventivo = tempo * tariffa;
    return preventivo;

}



