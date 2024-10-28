import type { SecretPublic } from "./SecretPublic";
import type { HttpValidationError } from "./HttpValidationError";
import type { SecretCreate } from "./SecretCreate";

 /**
 * @description Successful Response
*/
export type CreateSecret200 = SecretPublic;
/**
 * @description Validation Error
*/
export type CreateSecret422 = HttpValidationError;
export type CreateSecretMutationRequest = SecretCreate;
/**
 * @description Successful Response
*/
export type CreateSecretMutationResponse = SecretPublic;
export type CreateSecretMutation = {
    Response: CreateSecretMutationResponse;
    Request: CreateSecretMutationRequest;
    Errors: CreateSecret422;
};