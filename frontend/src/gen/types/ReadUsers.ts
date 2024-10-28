import type { UsersPublic } from "./UsersPublic";
import type { HttpValidationError } from "./HttpValidationError";

 export type ReadUsersQueryParams = {
    /**
     * @default 0
     * @type integer | undefined
    */
    skip?: number;
    /**
     * @default 100
     * @type integer | undefined
    */
    limit?: number;
};
/**
 * @description Successful Response
*/
export type ReadUsers200 = UsersPublic;
/**
 * @description Validation Error
*/
export type ReadUsers422 = HttpValidationError;
/**
 * @description Successful Response
*/
export type ReadUsersQueryResponse = UsersPublic;
export type ReadUsersQuery = {
    Response: ReadUsersQueryResponse;
    QueryParams: ReadUsersQueryParams;
    Errors: ReadUsers422;
};