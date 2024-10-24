(() => {
    type Avenger = {
        name: string,
        weapon: string
    };

    const ironMan: Avenger = {
        name: 'Tony Stark',
        weapon: 'Robotic Suit'
    };

    const scarlettWitch: Avenger = {
        name: 'Wanda Maximoff',
        weapon: 'Darkhold'
    };

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };

    const avengers: Avenger[] = [ironMan, scarlettWitch, thor];

    for (const avenger of avengers) {
        console.log({avenger});
    }


})();