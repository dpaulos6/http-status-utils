import { codes } from "./codes";

export function getDescription(code: number): string {
  verifyCode(code);
  return codes[code.toString()] || "Unknown Status Code";
}

export function isSuccess(code: number): boolean {
  verifyCode(code);
  return code >= 200 && code < 300;
}

export function isError(code: number): boolean {
  verifyCode(code);
  return code >= 400 && code < 600;
}

export function isTeapot(code: number): boolean {
  verifyCode(code)
  return code === 418;
}

export function handleHttp(code: number) {
  verifyCode(code);
  return {
    description: getDescription(code),
    isSuccess: isSuccess(code),
    isError: isError(code),
  };
}

function verifyCode(code: number) {
  if (!Number.isInteger(code)) {
    throw new TypeError(`Expected code to be an integer, instead got ${code}`);
  }

  if (code < 100 || code > 599) {
    throw new RangeError(
      `Expected code to be between 100 and 599, instead got ${code}`
    );
  }
}
