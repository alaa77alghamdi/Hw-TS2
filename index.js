"use strict";
exports.__esModule = true;
var user = [
    { age: 25, name: 'alaa', occupation: 'Web Developr' },
    { age: 22, name: 'sara', occupation: 'Marketing manager' },
    { age: 30, name: 'noor', occupation: 'Food scientist' }
];
var Admin = [
    { age: 34, name: 'saad', specialty: 'computer Science' },
    { age: 45, name: 'kahled', specialty: 'Informtion System' },
    { age: 37, name: 'lama', specialty: 'Informtion Technology' }
];
function Per(arr_Prson) {
    for (var _i = 0, arr_Prson_1 = arr_Prson; _i < arr_Prson_1.length; _i++) {
        var i = arr_Prson_1[_i];
        console.log("Age: ".concat(i.age, ", Name: ").concat(i.name, ", Occupation: ").concat(i.occupation));
    }
}
var Persone = [
    { age: 25, name: 'alaa', occupation: 'Web Developr' },
    { age: 22, name: 'sara', occupation: 'Marketing manager' },
    { age: 30, name: 'noor', occupation: 'Food scientist' },
    { age: 34, name: 'saad', specialty: 'computer Science' },
    { age: 45, name: 'kahled', specialty: 'Informtion System' },
    { age: 37, name: 'lama', specialty: 'Informtion Technology' }
];
console.log(Per(user));
function Persone1(arr_Prson) {
    for (var _i = 0, arr_Prson_2 = arr_Prson; _i < arr_Prson_2.length; _i++) {
        var i = arr_Prson_2[_i];
        if ("occupation" in arr_Prson) {
            console.log("Age: ".concat(i.age, ", Name: ").concat(i.name, ", Occupation: ").concat(i.occupation));
        }
        else if ("specialty" in arr_Prson) {
            console.log("Age: ".concat(i.age, ", Name: ").concat(i.name, ", specialty: ").concat(i.specialty));
        }
    }
}
console.log(Persone1(Persone));
function age1(age) {
    for (var _i = 0, Persone_1 = Persone; _i < Persone_1.length; _i++) {
        var age_1 = Persone_1[_i];
        if ('age' in Persone) {
            console.log("Age: ".concat(age_1.age));
        }
    }
}
console.log(age1(33));
