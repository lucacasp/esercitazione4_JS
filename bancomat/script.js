let saldo = 0;
let flag = true; // questa variabile controlla l'esecuzione del ciclo 

//tutto viene ciclato nel while quindi finché flag = true funziona, quindi se flag = false
//il ciclo termina e si chiude il programma
while (flag){ // come dire flag === true
    let scelta = prompt ("Ciao e benvenuto. Cosa vuoi fare? \n1. Saldo \n2. Deposito\n3. Esci dalla banca.")
    scelta = parseInt(scelta);

    if (scelta === 1){
        console.log("Il tuo saldo è pari a " + saldo + " €");
    } else if (scelta === 2){
        let deposito = parseFloat(prompt("Inserisci l'importo da desipotare sul tuo conto."))
        if (isNaN(deposito) || deposito <= 0){
            console.log("Mi dispiace, importo non valido. Riprova più tardi.")
        } else {
            saldo+= deposito;
            console.log("Deposito effettuato. Hai depositato " + deposito + " euro sul conto, hai a disposizione " + saldo + " €")
        }
    } else if (scelta === 3){
        console.log("Grazie per aver utilizzato la nostra Banca. Arrivederci e grazie");
        flag = false;
    } else {
        console.log ("Errato. Inserisci un valore idoneo.")
    }
}
