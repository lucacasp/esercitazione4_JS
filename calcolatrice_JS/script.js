let screen = document.getElementById("screen")

function insertNumber(number){
    screen.value += number;
    focusScreen()
}

function insertOperator(operator){
    screen.value += " " + operator + " "
}
function canc(){
    screen.value = "";
    focusScreen()
}
function backTo(){
    screen.value = screen.value.slice(0, -1);
    focusScreen()
}
function signToggle(){
    if(screen.value.startswith("-")){
        screen.value = screen.value.slice(1)
    }else{
        screen.value = "-" + screen.value
        focusScreen()
    }
}
function calculateResult(){
    let expression = screen.value
    let result = eval(expression)
    screen.value = result 
    focusScreen()
}
function focusScreen(){
    if(document.activeElement !== screen){
        screen.focus()
    }
}
document.addEventListener("DOMContentLoaded", function(){
    focusScreen()
})