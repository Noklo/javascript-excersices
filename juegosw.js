
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    switch(true){
        case (user === op1 && cpu === op3):
            console.log("el usuario GANÓ con "+ op1);
            break;
        case (user === op2 && cpu === op1):
            console.log( "el usuario GANÓ con " + op2);
            break;
        case (user === op3 && cpu === op2):
            console.log("el usuario GANÓ con " + op3);
            break;
        case (cpu === op1 && user === op3):
            console.log("el Computador GANÓ con "+ op1);
            break;
        case (cpu === op2 && user === op1):
            console.log( "el Computador GANÓ con " + op2);
            break;
        case (cpu === op3 && user === op2):
            console.log("el Computador GANÓ con " + op3);
            break;
        case (user === cpu):
            console.log("Empate");
        }
    }

resultado(op1,op3)