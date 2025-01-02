"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDescription = getDescription;
exports.isSuccess = isSuccess;
exports.isError = isError;
exports.isTeapot = isTeapot;
exports.handleHttp = handleHttp;
const codes_1 = require("./codes");
/**
 * Returns the description of the given HTTP status code.
 * @param {number} code - The HTTP status code.
 * @returns {string} The description of the HTTP status code.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
function getDescription(code) {
    verifyCode(code);
    return codes_1.codes[code.toString()] || 'Unknown Status Code';
}
/**
 * Checks if the given HTTP status code represents a successful response.
 * @param {number} code - The HTTP status code.
 * @returns {boolean} True if the code is a success code, false otherwise.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
function isSuccess(code) {
    verifyCode(code);
    return code >= 200 && code < 300;
}
/**
 * Checks if the given HTTP status code represents an error response.
 * @param {number} code - The HTTP status code.
 * @returns {boolean} True if the code is an error code, false otherwise.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
function isError(code) {
    verifyCode(code);
    return code >= 400 && code < 600;
}
/**
 * Checks if the given HTTP status code represents a "I'm a teapot" response.
 * @param {number} code - The HTTP status code.
 * @returns {boolean} True if the code is 418, false otherwise.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
function isTeapot(code) {
    verifyCode(code);
    return code === 418;
}
/**
 * Handles HTTP status code and returns an object with its description and status.
 * @param {number} code - The HTTP status code.
 * @returns {Object} An object containing the description and status of the HTTP code.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
function handleHttp(code) {
    verifyCode(code);
    return {
        description: getDescription(code),
        isSuccess: isSuccess(code),
        isError: isError(code),
        isTeapot: isTeapot(code)
    };
}
/**
 * Verifies if the provided HTTP status code is valid.
 * @param {number} code - The HTTP status code.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
function verifyCode(code) {
    if (!Number.isInteger(code)) {
        throw new TypeError(`Expected code to be an integer, instead got ${code}`);
    }
    if (code < 100 || code > 599) {
        throw new RangeError(`Expected code to be between 100 and 599, instead got ${code}`);
    }
}
