/**
 * Returns the description of the given HTTP status code.
 * @param {number} code - The HTTP status code.
 * @returns {string} The description of the HTTP status code.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
export declare function getDescription(code: number): string;
/**
 * Checks if the given HTTP status code represents a successful response.
 * @param {number} code - The HTTP status code.
 * @returns {boolean} True if the code is a success code, false otherwise.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
export declare function isSuccess(code: number): boolean;
/**
 * Checks if the given HTTP status code represents an error response.
 * @param {number} code - The HTTP status code.
 * @returns {boolean} True if the code is an error code, false otherwise.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
export declare function isError(code: number): boolean;
/**
 * Checks if the given HTTP status code represents a "I'm a teapot" response.
 * @param {number} code - The HTTP status code.
 * @returns {boolean} True if the code is 418, false otherwise.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
export declare function isTeapot(code: number): boolean;
/**
 * Handles HTTP status code and returns an object with its description and status.
 * @param {number} code - The HTTP status code.
 * @returns {Object} An object containing the description and status of the HTTP code.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
export declare function handleHttp(code: number): {
    description: string;
    isSuccess: boolean;
    isError: boolean;
    isTeapot: boolean;
};
