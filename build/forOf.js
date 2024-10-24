"use strict";
(() => {
    const ironMan = {
        name: 'Tony Stark',
        weapon: 'Robotic Suit'
    };
    const scarlettWitch = {
        name: 'Wanda Maximoff',
        weapon: 'Darkhold'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironMan, scarlettWitch, thor];
    for (const avenger of avengers) {
        console.log({ avenger });
    }
})();
//# sourceMappingURL=forOf.js.map