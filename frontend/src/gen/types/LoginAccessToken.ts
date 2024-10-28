import type { Token } from "./Token";
import type { HttpValidationError } from "./HttpValidationError";
import type { BodyLoginLoginAccessToken } from "./BodyLoginLoginAccessToken";

 /**
 * @description Successful Response
*/
export type LoginAccessToken200 = Token;
/**
 * @description Validation Error
*/
export type LoginAccessToken422 = HttpValidationError;
export type LoginAccessTokenMutationRequest = BodyLoginLoginAccessToken;
/**
 * @description Successful Response
*/
export type LoginAccessTokenMutationResponse = Token;
export type LoginAccessTokenMutation = {
    Response: LoginAccessTokenMutationResponse;
    Request: LoginAccessTokenMutationRequest;
    Errors: LoginAccessToken422;
};