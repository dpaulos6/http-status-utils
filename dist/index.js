"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDescription = getDescription;
exports.isSuccess = isSuccess;
exports.isError = isError;
exports.isTeapot = isTeapot;
exports.handleHttp = handleHttp;
const codes_1 = require("./codes");
function getDescription(code) {
    verifyCode(code);
    return codes_1.codes[code.toString()] || 'Unknown Status Code';
}
function isSuccess(code) {
    verifyCode(code);
    return code >= 200 && code < 300;
}
function isError(code) {
    verifyCode(code);
    return code >= 400 && code < 600;
}
function isTeapot(code) {
    verifyCode(code);
    return code === 418;
}
function handleHttp(code) {
    verifyCode(code);
    return {
        description: getDescription(code),
        isSuccess: isSuccess(code),
        isError: isError(code),
        isTeapot: isTeapot(code)
    };
}
function verifyCode(code) {
    if (!Number.isInteger(code)) {
        throw new TypeError(`Expected code to be an integer, instead got ${code}`);
    }
    if (code < 100 || code > 599) {
        throw new RangeError(`Expected code to be between 100 and 599, instead got ${code}`);
    }
}
