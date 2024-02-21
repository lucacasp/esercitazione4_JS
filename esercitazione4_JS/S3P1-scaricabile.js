console.log("please")
/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/*
function crazySum(num1, num2){
    if(num1===num2){
        return (num1 + num2) *3
    } else {
        return num1 + num2
    }
}
console.log(crazySum(3,2))
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*function boundary (numero){
    if ((numero >20 && numero <=100) || numero === 400){
        return true;
    } else {
        return false;
    }
}*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
function reverseString (stringa){        
        return stringa.split("").reverse("").join("");
    }

    //console.log(reverseString("EPICODE")) 

    reverseString ("EPICODE")
*/
/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
/*
function upperFirst (string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(upperFirst(""));
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
/*
function giveMeRandom (n){
    let arrVar = []
    for( let i = 0; i < 10 ; i++){
        arrVar[i] = Math.floor(Math.random()*10);
    }    
    return arrVar
}
console.log(giveMeRandom(6))
*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/*
function area(l1, l2){
    areaRett = l1 * l2 // A=b*h
    return areaRett
}
console.log(area(4, 6))
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
/*
function crazyDiff (nr){
    absDif = nr - 19
    if ( absDif > 19){
        return absDif * 3
    }
    else{
        return absDif 
    }
}
console.log(crazyDiff()) //type a number 
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
/*
function codify(str){
     if(str.startsWith("code")){
        return str
     } else {
        return "code" + str
     }
}

console.log(codify("javascript")) // aggiunge modifica
console.log(codify("codeciao")) // non aggiunge 
*/



/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*
function check3and7 (nr1){
    if ( nr1 %3 === 0 || nr1 %7 === 0){
        return true 
    } else {
        return false
    }
}
console.log(check3and7(27)) // true 
console.log(check3and7(10)) // false 
console.log(check3and7(21)) // true 
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
/*
function cutString (str){
    return str.slice(1,-1) 
}
console.log(cutString("javascript")) // avascrip
*/
