import type { Message } from "./Message";
import type { HttpValidationError } from "./HttpValidationError";

 export type DeleteSecretPathParams = {
    /**
     * @type string, uuid
    */
    id: string;
};
/**
 * @description Successful Response
*/
export type DeleteSecret200 = Message;
/**
 * @description Validation Error
*/
export type DeleteSecret422 = HttpValidationError;
/**
 * @description Successful Response
*/
export type DeleteSecretMutationResponse = Message;
export type DeleteSecretMutation = {
    Response: DeleteSecretMutationResponse;
    PathParams: DeleteSecretPathParams;
    Errors: DeleteSecret422;
};