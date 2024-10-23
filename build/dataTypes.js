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
//# sourceMappingURL=dataTypes.js.map