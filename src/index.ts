import { codes } from "./codes";

export function getDescription(code: number): string {
  if (!code || !Number.isInteger(code)) {
    throw new TypeError(`Expected code to be an integer, instead got ${code}`);
  }

  if (code < 100 || code > 599) {
    throw new RangeError(`Expected code to be between 100 and 599, instead got ${code}`);
  }

  return codes[code.toString()] || "Unknown Status Code";
}

export function isSuccess(code: number): boolean {
  if (!code || !Number.isInteger(code)) {
    throw new TypeError(`Expected code to be an integer, instead got ${code}`);
  }

  if (code < 100 || code > 599) {
    throw new RangeError(`Expected code to be between 100 and 599, instead got ${code}`);
  }

  return code >= 200 && code < 300;
}

export function isError(code: number): boolean {
  if (!code || !Number.isInteger(code)) {
    throw new TypeError(`Expected code to be an integer, instead got ${code}`);
  }

  if (code < 100 || code > 599) {
    throw new RangeError(`Expected code to be between 100 and 599, instead got ${code}`);
  }

  return code >= 400 && code < 600;
}

export function handleHttp(code: number) {
  if (!code || !Number.isInteger(code)) {
    throw new TypeError(`Expected code to be an integer, instead got ${code}`);
  }

  if (code < 100 || code > 599) {
    throw new RangeError(`Expected code to be between 100 and 599, instead got ${code}`);
  }

  return {
    description: getDescription(code),
    isSuccess: isSuccess(code),
    isError: isError(code),
  };
}
