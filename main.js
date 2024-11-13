function isEmpty (value){
    return value != "" && value != null;
};
function isGreaterthanmontant (value){
    return (value) >= 1000;
};
function isLowerthanmontant (value){
    return (value) <= 1000000000;
};
function isGreaterthantaux (value){
    return (value) >= 0.01;
};
function isLowerthantaux (value){
    return (value) <= 100;
};
function isGreaterthanduree (value){
    return (value) >= 1;
};
function isLowerthanduree (value){
    return (value) <= 100;
};
function isValidInt(value) {
    if (!isNaN(parseInt(value, 10))) {
        return true;
    } 
    else {
        return false;
    }
};
function isValidFloat(value) {
    return (value % 1 !== 0);
};
function verifmontant (value){
    if(isEmpty(value) && isGreaterthanmontant(value) && isLowerthanmontant(value) && isValidInt(value) && !isValidFloat(value)){
        return "";
    }
    else{
        return " montant,";
    }
};
function veriftaux (value){
    if(isEmpty(value) && isGreaterthantaux(value) && isLowerthantaux(value) && isValidInt(value)){
        return "";
    }
    else{
        return " taux,";
    }
};
function verifduree (value){
    if(isEmpty(value) && isGreaterthanduree(value) && isLowerthanduree(value) && isValidInt(value) && !isValidFloat(value)){
        return "";
    }
    else{
        return " durée,";
    }
};

document.getElementById("calcul").addEventListener("click", function(event){

    event.preventDefault();

    let montantvide = document.querySelector("#montant").value;
    let tauxvide = document.querySelector("#taux").value;
    let dureevide = document.querySelector("#duree").value;

    const msgmontant = verifmontant(montantvide);
    const msgtaux = veriftaux(tauxvide);
    const msgduree = verifduree(dureevide);

    if(msgmontant == " montant," || msgtaux == " taux," || msgduree == " durée,") {        
        document.getElementById("message").textContent = "Veuillez remplir les champs :"+ msgmontant + msgtaux + msgduree + " avec des données valides !";
    }
    else {
        document.getElementById("message").textContent = ""; 
    }
});



// Debut calcul tableau

// Affiche le tableau si le message est vide losqu'on clique sur le bouton calcul
document.getElementById("calcul").addEventListener("click", function() {
    const tableau = document.getElementById("affiche");
    const message = document.getElementById("message")?.textContent || "";

    if (message === "") {
        tableau.style.display = 'flex';
    } else {
        tableau.style.display = 'none';
    }
});

// Calcul du tableau

// Bouton Telechargement PDF
document.getElementById("PDF").addEventListener("click", function() {
    const element = document.body; // Capture toute la page

    // Vérification des tailles d'écran et application des styles dynamiques
    if (window.matchMedia("(max-width: 426px)").matches) {
        // Styles pour les petits écrans (téléphones)
        document.querySelector(".home").style.margin = "10px";
        document.querySelector(".affiche").style.margin = "10px";
    } else if (window.matchMedia("(min-width: 427px) and (max-width: 1024px)").matches) {
        // Styles pour les écrans moyens (tablettes)
        document.querySelector(".home").style.margin = "30px 70px";
        document.querySelector(".affiche").style.margin = "30px 70px";
    } else if (window.matchMedia("(min-width: 1025px)").matches) {
        // Styles pour les grands écrans (ordinateurs de bureau)
        document.querySelector(".home").style.margin = "50px 100px";
        document.querySelector(".affiche").style.margin = "50px 100px";
    }

    // Génération du PDF
    html2pdf(element, {
        margin: 0.2,
        filename: 'pret_immobilier.pdf',
        html2canvas: { scale: 3 }, // Ajuste la valeur pour un rendu de meilleure qualité
        jsPDF: { format: 'letter', orientation: 'portrait' }
    });
});