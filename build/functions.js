"use strict";
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
//# sourceMappingURL=functions.js.map