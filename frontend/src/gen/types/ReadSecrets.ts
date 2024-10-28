import type { SecretsPublic } from "./SecretsPublic";
import type { HttpValidationError } from "./HttpValidationError";

 export type ReadSecretsQueryParams = {
    /**
     * @default 0
     * @type integer | undefined
    */
    skip?: number;
    /**
     * @default 100
     * @type integer | undefined
    */
    limit?: number;
};
/**
 * @description Successful Response
*/
export type ReadSecrets200 = SecretsPublic;
/**
 * @description Validation Error
*/
export type ReadSecrets422 = HttpValidationError;
/**
 * @description Successful Response
*/
export type ReadSecretsQueryResponse = SecretsPublic;
export type ReadSecretsQuery = {
    Response: ReadSecretsQueryResponse;
    QueryParams: ReadSecretsQueryParams;
    Errors: ReadSecrets422;
};