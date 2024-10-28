import type { Message } from "./Message";
import type { HttpValidationError } from "./HttpValidationError";

 export type TestEmailQueryParams = {
    /**
     * @type string, email
    */
    email_to: string;
};
/**
 * @description Successful Response
*/
export type TestEmail201 = Message;
/**
 * @description Validation Error
*/
export type TestEmail422 = HttpValidationError;
/**
 * @description Successful Response
*/
export type TestEmailMutationResponse = Message;
export type TestEmailMutation = {
    Response: TestEmailMutationResponse;
    QueryParams: TestEmailQueryParams;
    Errors: TestEmail422;
};