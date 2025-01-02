import { codes } from './codes'

/**
 * Returns the description of the given HTTP status code.
 * @param {number} code - The HTTP status code.
 * @returns {string} The description of the HTTP status code.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
export function getDescription(code: number): string {
  verifyCode(code)
  return codes[code.toString()] || 'Unknown Status Code'
}

/**
 * Checks if the given HTTP status code represents a successful response.
 * @param {number} code - The HTTP status code.
 * @returns {boolean} True if the code is a success code, false otherwise.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
export function isSuccess(code: number): boolean {
  verifyCode(code)
  return code >= 200 && code < 300
}

/**
 * Checks if the given HTTP status code represents an error response.
 * @param {number} code - The HTTP status code.
 * @returns {boolean} True if the code is an error code, false otherwise.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
export function isError(code: number): boolean {
  verifyCode(code)
  return code >= 400 && code < 600
}

/**
 * Checks if the given HTTP status code represents a "I'm a teapot" response.
 * @param {number} code - The HTTP status code.
 * @returns {boolean} True if the code is 418, false otherwise.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
export function isTeapot(code: number): boolean {
  verifyCode(code)
  return code === 418
}

/**
 * Handles HTTP status code and returns an object with its description and status.
 * @param {number} code - The HTTP status code.
 * @returns {Object} An object containing the description and status of the HTTP code.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
export function handleHttp(code: number) {
  verifyCode(code)
  return {
    description: getDescription(code),
    isSuccess: isSuccess(code),
    isError: isError(code),
    isTeapot: isTeapot(code)
  }
}

/**
 * Verifies if the provided HTTP status code is valid.
 * @param {number} code - The HTTP status code.
 * @throws {TypeError} If the code is not an integer.
 * @throws {RangeError} If the code is not between 100 and 599.
 */
function verifyCode(code: number) {
  if (!Number.isInteger(code)) {
    throw new TypeError(`Expected code to be an integer, instead got ${code}`)
  }

  if (code < 100 || code > 599) {
    throw new RangeError(
      `Expected code to be between 100 and 599, instead got ${code}`
    )
  }
}
