import type { SecretPublic } from "./SecretPublic";
import type { HttpValidationError } from "./HttpValidationError";

 export type ReadSecretPathParams = {
    /**
     * @type string, uuid
    */
    id: string;
};
/**
 * @description Successful Response
*/
export type ReadSecret200 = SecretPublic;
/**
 * @description Validation Error
*/
export type ReadSecret422 = HttpValidationError;
/**
 * @description Successful Response
*/
export type ReadSecretQueryResponse = SecretPublic;
export type ReadSecretQuery = {
    Response: ReadSecretQueryResponse;
    PathParams: ReadSecretPathParams;
    Errors: ReadSecret422;
};