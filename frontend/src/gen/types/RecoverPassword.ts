import type { Message } from "./Message";
import type { HttpValidationError } from "./HttpValidationError";

 export type RecoverPasswordPathParams = {
    /**
     * @type string
    */
    email: string;
};
/**
 * @description Successful Response
*/
export type RecoverPassword200 = Message;
/**
 * @description Validation Error
*/
export type RecoverPassword422 = HttpValidationError;
/**
 * @description Successful Response
*/
export type RecoverPasswordMutationResponse = Message;
export type RecoverPasswordMutation = {
    Response: RecoverPasswordMutationResponse;
    PathParams: RecoverPasswordPathParams;
    Errors: RecoverPassword422;
};