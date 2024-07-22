import { getDescription, isSuccess, isError, handleHttp } from "./index";

console.log(getDescription(200)); // OK
console.log(getDescription(404)); // Not Found
console.log(getDescription(999)); // Unknown Status Code

console.log(isSuccess(200)); // true
console.log(isSuccess(404)); // false

console.log(isError(200)); // false
console.log(isError(404)); // true

const {
  description,
  isSuccess: successStatus,
  isError: errorStatus,
} = handleHttp(200);
console.log(description); // OK
console.log(successStatus); // true
console.log(errorStatus); // false
