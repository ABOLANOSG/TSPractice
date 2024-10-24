(() => {
//first way to make a class
    class Avenger {
        private name: string;
        public team: string;
        private realName?: string;
        static avgAge: number = 35;

        constructor(name:string, team:string, realName?:string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    };

    const antman: Avenger = new Avenger('antman', 'capitan');
    //console.log({antman})
    //la unica manera de poder obtener el valor de algo statico es llamandolo directamente de la clase:
    //console.log( Avenger.avgAge );
})();

(() => {
    class Avenger {

        static avgAge: number = 35;

        constructor(
            private name: string,
            public team: string,
            private realName?: string,
            //si se requiere cambiar el valor de una propiedad estática, se puede hacer de la siguiente manera.
            avgAge: number = 40) {
                //no se usa el this.avgAge para usar el valor, porque es estático
                //se tiene que llamar a la clase para poder acceder a una propiedad estática
                Avenger.avgAge = avgAge;
            };            
    };

    const ScarlettWitch: Avenger = new Avenger('Scarlett Witch', 'Iron Man', 'Wanda Maximoff');

    console.log(ScarlettWitch);
    console.log(Avenger.avgAge)//40;

})();

(() => {
    //adding methods to a class
    class Avenger {

        static avgAge: number = 35;

        constructor(
            private name: string,
            public team: string,
            private realName?: string,
            //si se requiere cambiar el valor de una propiedad estática, se puede hacer de la siguiente manera.
            avgAge: number = 40) {
                //no se usa el this.avgAge para usar el valor, porque es estático
                //se tiene que llamar a la clase para poder acceder a una propiedad estática
                Avenger.avgAge = avgAge;
            };            
    };

    const spiderMan: Avenger = new Avenger('Spider Man', 'Iron Man', 'Peter Parker');
    console.log(spiderMan);
})