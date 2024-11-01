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


// Bouton Telechargement PDF
// Attendre que la bibliothèque jsPDF soit chargée
window.onload = () => {
    document.getElementById("PDF").addEventListener("click", function() {
        // Importer jsPDF
        const { jsPDF } = window.jspdf;

        // Créer un nouveau document PDF
        const pdf = new jsPDF();

        // Récupérer le contenu à exporter
        const content = document.getElementById("content").textContent;

        // Ajouter le texte au PDF
        pdf.text(content, 10, 10); // (texte, x, y)

        // Télécharger le PDF
        pdf.save("document.pdf");
    });
};
