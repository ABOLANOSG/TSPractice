declare const contar: (heroes: string[]) => number;
declare const superHeroes: string[];
declare const llamarBatman: (llamar?: string) => void;
declare const unirheroes: (...personas: string[]) => string;
declare const noHaceNada: (numero: number, texto: string, booleano: boolean, arreglo: string[]) => void;
declare let noHaceNadaTampoco: (a: number, b: string, c: boolean, d: string[]) => void;
declare let x: number;
declare let y: number;
declare let z: any;
declare enum ContractStatus {
    Permanent = 1,
    Temp = 2,
    Apprentice = 3
}
declare let employeeStatus: ContractStatus;
declare let randomValue: unknown;
declare const newConstant: string;
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
//# sourceMappingURL=main.d.ts.map