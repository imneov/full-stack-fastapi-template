import type { Message } from "./Message";
import type { HttpValidationError } from "./HttpValidationError";
import type { NewPassword } from "./NewPassword";

 /**
 * @description Successful Response
*/
export type ResetPassword200 = Message;
/**
 * @description Validation Error
*/
export type ResetPassword422 = HttpValidationError;
export type ResetPasswordMutationRequest = NewPassword;
/**
 * @description Successful Response
*/
export type ResetPasswordMutationResponse = Message;
export type ResetPasswordMutation = {
    Response: ResetPasswordMutationResponse;
    Request: ResetPasswordMutationRequest;
    Errors: ResetPassword422;
};