"use strict";
function addNumbers(x, y) {
    return x + y;
}
;
console.log(addNumbers(2, 3));
let x;
let y = 1;
let z;
x = 3;
y = 4;
z = "one";
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
;
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
let randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase());
}
else {
    console.log('Error - A string was expected here.');
}
;
const newConstant = "text";
//# sourceMappingURL=module01.js.map