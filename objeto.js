//Un objeto tiene muchas propiedades
//Se usan palabras claves y valores.
//Para llamar un objeto usamos  "." y palabra clave miAuto.marca
var miAuto = {  marca: "Toyota",
                modelo: "Corola",
                annio: 2020,
                detallesDelAuto: function () {
                    console.log(`Auto ${this.modelo} ${this.annio}`);
                }
            };