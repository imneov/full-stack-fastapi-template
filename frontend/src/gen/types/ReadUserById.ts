import type { UserPublic } from "./UserPublic";
import type { HttpValidationError } from "./HttpValidationError";

 export type ReadUserByIdPathParams = {
    /**
     * @type string, uuid
    */
    user_id: string;
};
/**
 * @description Successful Response
*/
export type ReadUserById200 = UserPublic;
/**
 * @description Validation Error
*/
export type ReadUserById422 = HttpValidationError;
/**
 * @description Successful Response
*/
export type ReadUserByIdQueryResponse = UserPublic;
export type ReadUserByIdQuery = {
    Response: ReadUserByIdQueryResponse;
    PathParams: ReadUserByIdPathParams;
    Errors: ReadUserById422;
};