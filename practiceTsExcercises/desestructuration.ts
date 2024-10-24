(() => {
//desestructuracion de objetos
    type HeroOrganization = {
        nickFury: string;
        ironMan: string;
        vision: string;
        active: boolean;
        members: number;
    }

    const avengers: HeroOrganization = {
        nickFury: 'Samuel L. Jackson',
        ironMan: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active: true,
        members: 50
    };
//de esta forma podemos sacar propiedades de un objeto y usarlo directamente 
//la manera común de obtener el valor de una propiedad sería *avengers.vision*
   const { members, vision } = avengers;
   console.log(members, vision.toUpperCase());
// ...resto son los demas valores que se encuentran en el objeto sin incluir el que hayamos utilizado directamente e.g. ironMan no va a aparecer al loggear ...resto
    const printAvenger = ({ironMan, ...resto}: HeroOrganization ) => {
        console.log(ironMan, resto);
    };

    printAvenger(avengers);
})();

(() => {
//desestructuración de arreglos
//La destructuración de arreglos permite extraer valores y asignarlos directamente a variables

const avengersArr: string[] = ['Capitain America', 'Ironman', 'Hulk'];
console.log(avengersArr[1]);
//es6 forma de desestructurar arrays, se dejan los espacios de los arreglos y se le asigna valor al que queremos usar e.g. ironman
const [ , ironman , green] = avengersArr;
console.log({ironman, green});

})();