// empty array on init ----------------------------------------------------------------------------

let billettArray = [];

// error message functions ------------------------------------------------------------------------

const feilmelding = {
    film: "Du må velge en film",
    antall: "Du må velge et antall",
    navn: "Du må skrive inn et navn, kan kun inneholde bokstaver",
    telefonnr: "Du må skrive inn et telefonnummer, kan kun inneholde tall",
    epost: "Du må skrive inn en gyldig epost-adresse"
}

function toggleFeilmelding(id, ugyldigInput, feilmelding) {
    if (ugyldigInput){
        $('#'+id+'UgyldigMelding').html(feilmelding);
    } else {
        $('#'+id+'UgyldigMelding').html("");
    }
}

// input validation functions ---------------------------------------------------------------------

const regExp = {
    film: /[^ ]/,
    antall: /^[1-9][0-9]?$/,
    navn: /^[^0-9]+$/,
    telefonnr: /^[0-9]+$/,
    epost: /^([a-å]?[0-9]?)+@([a-å]?[0-9]?)+.[a-å]+/ //probably horrible regexp
}

function validerInput(id, regExp, feilmelding) {
    let input = document.getElementById(id).value;
    let inputGyldig = regExp.test(input);
    toggleFeilmelding(id, !inputGyldig, feilmelding);
    return inputGyldig;
}

// onchange validation calls ----------------------------------------------------------------------

$(document).ready(function () {
    $('#film').change(function() {validerInput("film", regExp.film, feilmelding.film)});
    $('#antall').change(function() {validerInput("antall", regExp.antall, feilmelding.antall)});
    $('#fornavn').change(function(){validerInput("fornavn", regExp.navn, feilmelding.navn)});
    $('#etternavn').change(function(){validerInput("etternavn", regExp.navn, feilmelding.navn)});
    $('#telefonnr').change(function(){validerInput("telefonnr", regExp.telefonnr, feilmelding.telefonnr)});
    $('#epost').change(function(){validerInput("epost", regExp.epost, feilmelding.epost)});
});

// ticket updating and storing functions ----------------------------------------------------------

function lagNyBillett(){
    return {
        film: $('#film').val(),
        antall: $('#antall').val(),
        fornavn: $('#fornavn').val(),
        etternavn: $('#etternavn').val(),
        telefonnr: $('#telefonnr').val(),
        epost: $('#epost').val()
    };
}

// main functions ---------------------------------------------------------------------------------

function validerSkjema() {
    let inputSjekkArray = [
        validerInput("film", regExp.film, feilmelding.film),
        validerInput("antall", regExp.antall, feilmelding.antall),
        validerInput("fornavn", regExp.navn, feilmelding.navn),
        validerInput("etternavn", regExp.navn, feilmelding.navn),
        validerInput("telefonnr", regExp.telefonnr, feilmelding.telefonnr),
        validerInput("epost", regExp.epost, feilmelding.epost)
    ]
    return !inputSjekkArray.includes(false);
}

function kjopBillett(){
    if (validerSkjema()){
        let billett = lagNyBillett();
        billettArray.push(billett);
        $.post("/lagre", billett); //prøver å sende billettatributtar til server, usikker på om funkar
        printBillettArray();
        document.getElementById('bestillingsskjema').reset();
    }
}

function slettAlleBilletter() {
    billettArray = [];
    $('#billettListe').html("");
}

// ticket array display functions -----------------------------------------------------------------

function printBillettArray() {

    let printTable = (
        "<tr>" +
        "<th>Film</th><th>Antall</th>" +
        "<th>Navn</th><th>Etternavn</th>" +
        "<th>Telefonnr</th><th>Epost</th>" +
        "</tr>"
    );
    for (let i of billettArray) {
        printTable += (
            "<tr>" +
            "<td>"+i.film+"</td><td>"+i.antall+"</td>" +
            "<td>"+i.fornavn+"</td><td>"+i.etternavn+"</td>" +
            "<td>"+i.telefonnr+"</td><td>"+i.epost+"</td>" +
            "</tr>"
        );
    }
    $('#billettListe').html(printTable);
}