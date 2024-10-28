import type { SecretPublic } from "./SecretPublic";
import type { HttpValidationError } from "./HttpValidationError";
import type { SecretUpdate } from "./SecretUpdate";

 export type UpdateSecretPathParams = {
    /**
     * @type string, uuid
    */
    id: string;
};
/**
 * @description Successful Response
*/
export type UpdateSecret200 = SecretPublic;
/**
 * @description Validation Error
*/
export type UpdateSecret422 = HttpValidationError;
export type UpdateSecretMutationRequest = SecretUpdate;
/**
 * @description Successful Response
*/
export type UpdateSecretMutationResponse = SecretPublic;
export type UpdateSecretMutation = {
    Response: UpdateSecretMutationResponse;
    Request: UpdateSecretMutationRequest;
    PathParams: UpdateSecretPathParams;
    Errors: UpdateSecret422;
};