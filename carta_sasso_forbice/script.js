let sceltePossibili = ["carta", "sasso", "forbice"];
let sceltaGiocatore = prompt ("Sasso, carta o forbice?").toLowerCase();

if (!sceltePossibili.includes(sceltaGiocatore)){
    console.log("Scelta non valida: dovevi scrivere carta, forbice o sasso");
} else {
    let sceltaPc = sceltePossibili[Math.floor(Math.random() * sceltePossibili.length)]

    console.log("Tu hai scelto " + sceltaGiocatore);
    console.log("Il pc ha scelto " + sceltaPc)

    if (sceltaGiocatore === sceltaPc){
        console.log("Pareggio");
    } else if (
    (sceltaGiocatore === "carta" && sceltaPc === "sasso") || 
    (sceltaGiocatore === "forbice" && sceltaPc === "carta") ||
    (sceltaGiocatore === "sasso" && sceltaPc === "forbice")){
        console.log("GG, hai vinto, bravo!!")
    } else {
        console.log("Hai perso")
    }
}