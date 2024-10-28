import type { Message } from "./Message";
import type { HttpValidationError } from "./HttpValidationError";

 export type DeleteUserPathParams = {
    /**
     * @type string, uuid
    */
    user_id: string;
};
/**
 * @description Successful Response
*/
export type DeleteUser200 = Message;
/**
 * @description Validation Error
*/
export type DeleteUser422 = HttpValidationError;
/**
 * @description Successful Response
*/
export type DeleteUserMutationResponse = Message;
export type DeleteUserMutation = {
    Response: DeleteUserMutationResponse;
    PathParams: DeleteUserPathParams;
    Errors: DeleteUser422;
};