"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    ;
    const antman = new Avenger('antman', 'capitan');
})();
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 40) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
        ;
    }
    Avenger.avgAge = 35;
    ;
    const ScarlettWitch = new Avenger('Scarlett Witch', 'Iron Man', 'Wanda Maximoff');
    console.log(ScarlettWitch);
    console.log(Avenger.avgAge);
})();
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 40) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
        ;
    }
    Avenger.avgAge = 35;
    ;
    const spiderMan = new Avenger('Spider Man', 'Iron Man', 'Peter Parker');
    console.log(spiderMan);
});
//# sourceMappingURL=classes.js.map