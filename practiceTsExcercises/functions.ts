(() => {
    //argumentos opcionales
    const fullName = ( firstName:string, lastName?: string): string => {
        return `${firstName} ${lastName || 'No last name'}`;
    };

    const name = fullName('Tony');

    console.log({name});
})();

(() => {
    //argumentos obligatorios
    const fullName  = (firstName: string, lastName: string):string => {
        return `${firstName} ${lastName}`;
    }

    console.log(fullName('Clark', 'Kent'));

})();

(() => {
    //default arguments
    const fullName = (firstName:string, lastName?:string, upper:boolean = false ):string =>{
        if ( upper ) {
            return `${ firstName } ${lastName || 'No last name'}`.toUpperCase();
        } else {
            return `${ firstName } ${lastName || 'No last name'}`;
        }
    };

    const name = fullName( 'Tony', 'Stark', true);

    console.log({name});

})();

(() => {
    //Infinit number of arguments || parámetros REST

    const fullName = ( firstName: string, ...restArgs: string[]): string => {
        return `${firstName} ${restArgs.join(' ')}`;
    };

    const characterName = fullName('Clark', 'Joseph', 'Kent');
    console.log({characterName});
})();

(() => {

});