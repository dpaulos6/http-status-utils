"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDescription = getDescription;
exports.isSuccess = isSuccess;
exports.isError = isError;
exports.handleHttp = handleHttp;
const codes_1 = require("./codes");
function getDescription(code) {
    return codes_1.codes[code.toString()] || "Unknown Status Code";
}
function isSuccess(code) {
    return code >= 200 && code < 300;
}
function isError(code) {
    return code >= 400 && code < 600;
}
function handleHttp(code) {
    return {
        description: getDescription(code),
        isSuccess: isSuccess(code),
        isError: isError(code),
    };
}
