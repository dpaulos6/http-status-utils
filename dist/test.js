"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log((0, index_1.getDescription)(200)); // OK
console.log((0, index_1.getDescription)(404)); // Not Found
console.log((0, index_1.getDescription)(999)); // Unknown Status Code
console.log((0, index_1.isSuccess)(200)); // true
console.log((0, index_1.isSuccess)(404)); // false
console.log((0, index_1.isError)(200)); // false
console.log((0, index_1.isError)(404)); // true
const { description, isSuccess: successStatus, isError: errorStatus, } = (0, index_1.handleHttp)(200);
console.log(description); // OK
console.log(successStatus); // true
console.log(errorStatus); // false
