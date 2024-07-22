"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = exports.isError = exports.isSuccess = exports.getDescription = void 0;
const codes_1 = require("./codes");
function getDescription(code) {
    return codes_1.codes[code.toString()] || "Unknown Status Code";
}
exports.getDescription = getDescription;
function isSuccess(code) {
    return code >= 200 && code < 300;
}
exports.isSuccess = isSuccess;
function isError(code) {
    return code >= 400 && code < 600;
}
exports.isError = isError;
function handleHttp(code) {
    return {
        description: getDescription(code),
        isSuccess: isSuccess(code),
        isError: isError(code),
    };
}
exports.handleHttp = handleHttp;
