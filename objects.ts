(() => {

    type Hero = {
        name: string, 
        age: number, 
        powers: string[], 
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Superspeed', 'Time traveling'],
    };
 //this is before to construct a type definition, but on this way is not reusable
    let superman: { name: string, age: number, powers: string[], getName?: () => string } = {
        name: 'Clark Kent',
        age: 36,
        powers: ['Superstrenght'],
        getName() {
            return this.name;
        },

    };

    if (superman.getName) {
        console.log(superman.getName());
    } else {
        console.log(`Get name is not defined in ${superman}`);
    };
})();

/*(() => {

})();*/