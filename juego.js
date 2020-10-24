var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANÓ con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANÓ con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANÓ con " + op3)
        }else if(cpu === op1 && user === op3){
            console.log("el Computador GANÓ con "+ op1)
        }else if(cpu === op2 && user === op1){
            console.log( "el Computador GANÓ con " + op2)
        }else if(cpu === op3 && user === op2){
            console.log("el Computador GANÓ con " + op3)
        }else{
            console.log("Imposible!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3)