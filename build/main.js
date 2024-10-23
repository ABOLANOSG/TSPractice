"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let heroStrengt;
    (function (heroStrengt) {
        heroStrengt[heroStrengt["acuaman"] = 0] = "acuaman";
        heroStrengt[heroStrengt["batman"] = 1] = "batman";
        heroStrengt[heroStrengt["flash"] = 5] = "flash";
        heroStrengt[heroStrengt["superman"] = 100] = "superman";
    })(heroStrengt || (heroStrengt = {}));
    ;
    const fuerzaFlash = heroStrengt.flash;
    const fuerzaSuperman = heroStrengt.superman;
    const fuerzaBatman = heroStrengt.batman;
    const fuerzaAquaman = heroStrengt.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    ;
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    console.log(fullName('Clark', 'Kent'));
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'No last name'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const characterName = fullName('Clark', 'Joseph', 'Kent');
    console.log({ characterName });
})();
(() => {
});
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
function addNumbers(x, y) {
    return x + y;
}
;
console.log(addNumbers(2, 3));
let x;
let y = 1;
let z;
x = 3;
y = 4;
z = "one";
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
;
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
let randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase());
}
else {
    console.log('Error - A string was expected here.');
}
;
const newConstant = "text";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Superspeed', 'Time traveling'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 36,
        powers: ['Superstrenght'],
        getName() {
            return this.name;
        },
    };
    if (superman.getName) {
        console.log(superman.getName());
    }
    else {
        console.log(`Get name is not defined in ${superman}`);
    }
    ;
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log(apocalipsis);
let mystique;
mystique = charles;
mystique = apocalipsis;
//# sourceMappingURL=main.js.map