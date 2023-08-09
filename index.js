// const inputTxt = document.getElementById("monInpTxt"); 
// inputTxt.setCustomValidity('non valide !')
document .getElementById("inscription") .addEventListener("submit" , function(e) {
    e.preventDefault();
    var erreur;
    var Fristname = document.getElementById("Fristname");

    if (!Fristname.value) {
        erreur = "veuillez renseigner un fristname";
    }
})