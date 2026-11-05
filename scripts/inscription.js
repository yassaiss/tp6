function calculertarif() {
    let nom= document.getElementById("nom").value;
    let status= document.getElementsByName("status");   
    let atelier= document.getElementById("atelier").value;
    let vip= document.getElementById("vip").checked;
    if (nom=="" ) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return false;
    }


}