"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// Example: Get description of HTTP status code 200
console.log((0, index_1.getDescription)(200)); // Output: OK
// Example: Get description of HTTP status code 404
console.log((0, index_1.getDescription)(404)); // Output: Not Found
// Uncomment the following line to see the error handling in action
// console.log(getDescription(999)); // Application should fail to compile
// Example: Check if HTTP status code 200 is a success
console.log((0, index_1.isSuccess)(200)); // Output: true
// Example: Check if HTTP status code 404 is a success
console.log((0, index_1.isSuccess)(404)); // Output: false
// Example: Check if HTTP status code 200 is an error
console.log((0, index_1.isError)(200)); // Output: false
// Example: Check if HTTP status code 404 is an error
console.log((0, index_1.isError)(404)); // Output: true
// Example: Handle HTTP status code 200 and get detailed information
const { description, isSuccess: successStatus, isError: errorStatus } = (0, index_1.handleHttp)(200);
console.log(description); // Output: OK
console.log(successStatus); // Output: true
console.log(errorStatus); // Output: false
// Example: Handle HTTP status code 418 (I'm a teapot)
const teapotStatus = (0, index_1.handleHttp)(418);
console.log(teapotStatus.description); // Output: I'm a teapot
console.log(teapotStatus.isTeapot); // Output: true
