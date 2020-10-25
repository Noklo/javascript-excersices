var estudiantes = ["María", "Sergio", "Rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log('¡Hola '+ estudiante + "!");
}

for (var i=0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

var estudiantes = ["María", "Sergio", "Rosa","Daniel"];

function despedirEstudiantes(estudiante){
    console.log('¡Adiós '+ estudiante + "!");
}

for (var estudiante of estudiantes){
    despedirEstudiantes(estudiante);
}