type HeroCar = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
};
declare const batimovil: HeroCar;
declare const bumblebee: HeroCar;
type Villian = {
    nombre: string;
    edad: number | undefined;
    mutante: boolean;
};
declare const villanos: Villian[];
type Charles = {
    poder: string;
    estatura: number;
};
declare const charles: Charles;
type Apocalipsis = {
    lider: boolean;
    miembros: string[];
};
declare const apocalipsis: Apocalipsis;
declare let mystique: Charles | Apocalipsis;
//# sourceMappingURL=typeDef.d.ts.map