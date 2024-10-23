function addNumbers(x: number, y: number) {
    return x + y;
};

console.log(addNumbers(2, 3));

let x: number; //* Explicitly declares x as a number type
let y = 1;  //* Implicitly declares y as a number type
let z;       //* Declares z without initializing it

x=3;
y=4;
z = "one";

//---------------**************-------------
//---------------*    ENUM    *-------------
//---------------**************-------------


enum ContractStatus {
    Permanent=1,
    Temp,
    Apprentice
};


let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
//To display the name associated with the enum value, we can use the provided indexer.
// Add the following to the bottom of your code:
console.log(ContractStatus[employeeStatus]);

//---------------****************-------------
//---------------*   ANY type   *-------------
//---------------****************-------------

/*let randomValue: any = 10;
randomValue = 'Mateo'; //OK
randomValue = true;  //OK

console.log(randomValue.name) //log "undefined"
randomValue(); //Return "randomValue is not a function" error
randomValue.toUpperCase(); //Returns "randomValue is not a function" error*/

//---------------****************-------------
//---------------*UNKNOWN   type*-------------
//---------------****************-------------

/*let randomValue: unknown = 10;
randomValue = 'Mateo'; //OK
randomValue = true;  //OK

console.log(randomValue.name); // Error: randomValue is of type unknown
randomValue(); // Error: randomValue is of type unknown
randomValue.toUpperCase(); // Error: randomValue is of type unknown*/

//--------------------****************-------------
//--------------------*TYPE ASSERTION*-------------
//--------------------****************-------------

let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());
} else {
    console.log('Error - A string was expected here.')
};

//--------------------****************-------------
//--------------------* UNION  TYPES *-------------
//--------------------****************-------------

const newConstant: string = "text";