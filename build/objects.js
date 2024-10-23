"use strict";
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
//# sourceMappingURL=objects.js.map