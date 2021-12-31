document.getElementById('prixDuTrajet').addEventListener('submit', prixDuTrajet);

function prixDuTrajet(e) {

    const userConso = document.getElementById("conso").value;
    const userTrajet = document.getElementById("distanceParcouru").value;
    const userPrix = document.getElementById("prixCarburant").value;

    console.log(userConso, userTrajet, userPrix);

    //Resultat
    const userTarifConso = parseFloat(userConso) / 100;
    const userTarifTrajet = parseFloat(userTrajet);
    const userTarifCarburant = parseFloat(userPrix);

    const userPrixTrajet = (userTarifConso * userTarifTrajet * userTarifCarburant).toFixed(2);

    document.getElementById("tarifConso").innerHTML = "$" + userPrixTrajet;
    e.preventDefault();
}