"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nickFury: 'Samuel L. Jackson',
        ironMan: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active: true,
        members: 50
    };
    const { members, vision } = avengers;
    console.log(members, vision.toUpperCase());
    const printAvenger = (_a) => {
        var { ironMan } = _a, resto = __rest(_a, ["ironMan"]);
        console.log(ironMan, resto);
    };
    printAvenger(avengers);
})();
(() => {
    const avengersArr = ['Capitain America', 'Ironman', 'Hulk'];
    console.log(avengersArr[1]);
    const [, ironman, green] = avengersArr;
    console.log({ ironman, green });
})();
//# sourceMappingURL=desestructuration.js.map