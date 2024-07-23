import { codes } from "./codes";

export function getDescription(code: number): string {
  if (!code || typeof code !== number) {
    throw new Error(`Expected code to be a number instead got ${typeof code}`);
  }

  return codes[code.toString()] || "Unknown Status Code";
}

export function isSuccess(code: number): boolean {
  if (!code || typeof code !== number) {
    throw new Error(`Expected code to be a number instead got ${typeof code}`);
  }

  return code >= 200 && code < 300;
}

export function isError(code: number): boolean {
  if (!code || typeof code !== number) {
    throw new Error(`Expected code to be a number instead got ${typeof code}`);
  }

  return code >= 400 && code < 600;
}

export function handleHttp(code: number) {
  if (!code || typeof code !== number) {
    throw new Error(`Expected code to be a number instead got ${typeof code}`);
  }

  return {
    description: getDescription(code),
    isSuccess: isSuccess(code),
    isError: isError(code),
  };
}
