import type { Message } from "./Message";
import type { HttpValidationError } from "./HttpValidationError";

 export type DeleteItemPathParams = {
    /**
     * @type string, uuid
    */
    id: string;
};
/**
 * @description Successful Response
*/
export type DeleteItem200 = Message;
/**
 * @description Validation Error
*/
export type DeleteItem422 = HttpValidationError;
/**
 * @description Successful Response
*/
export type DeleteItemMutationResponse = Message;
export type DeleteItemMutation = {
    Response: DeleteItemMutationResponse;
    PathParams: DeleteItemPathParams;
    Errors: DeleteItem422;
};