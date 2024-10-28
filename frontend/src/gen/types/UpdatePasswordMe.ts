import type { Message } from "./Message";
import type { HttpValidationError } from "./HttpValidationError";
import type { UpdatePassword } from "./UpdatePassword";

 /**
 * @description Successful Response
*/
export type UpdatePasswordMe200 = Message;
/**
 * @description Validation Error
*/
export type UpdatePasswordMe422 = HttpValidationError;
export type UpdatePasswordMeMutationRequest = UpdatePassword;
/**
 * @description Successful Response
*/
export type UpdatePasswordMeMutationResponse = Message;
export type UpdatePasswordMeMutation = {
    Response: UpdatePasswordMeMutationResponse;
    Request: UpdatePasswordMeMutationRequest;
    Errors: UpdatePasswordMe422;
};