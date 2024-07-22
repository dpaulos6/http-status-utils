import { codes } from "./codes";

export function getDescription(code: number): string {
  return codes[code.toString()] || "Unknown Status Code";
}

export function isSuccess(code: number): boolean {
  return code >= 200 && code < 300;
}

export function isError(code: number): boolean {
  return code >= 400 && code < 600;
}

export function handleHttp(code: number) {
  return {
    description: getDescription(code),
    isSuccess: isSuccess(code),
    isError: isError(code),
  };
}
