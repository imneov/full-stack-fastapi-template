import type { ValidationError } from "./ValidationError";

 export type HttpValidationError = {
    /**
     * @type array | undefined
    */
    detail?: ValidationError[];
};