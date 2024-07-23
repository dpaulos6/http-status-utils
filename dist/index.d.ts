export declare function getDescription(code: number): string;
export declare function isSuccess(code: number): boolean;
export declare function isError(code: number): boolean;
export declare function isTeapot(code: number): boolean;
export declare function handleHttp(code: number): {
    description: string;
    isSuccess: boolean;
    isError: boolean;
    isTeapot: boolean;
};
