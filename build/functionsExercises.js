"use strict";
function sumar(a, b) {
    return a + b;
}
;
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = "Ayuda") => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => {
    const nada = `${numero}, ${texto}, ${booleano}, ${arreglo}`;
    return;
};
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
//# sourceMappingURL=functionsExercises.js.map