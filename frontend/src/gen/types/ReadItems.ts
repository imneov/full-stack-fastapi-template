import type { ItemsPublic } from "./ItemsPublic";
import type { HttpValidationError } from "./HttpValidationError";

 export type ReadItemsQueryParams = {
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
export type ReadItems200 = ItemsPublic;
/**
 * @description Validation Error
*/
export type ReadItems422 = HttpValidationError;
/**
 * @description Successful Response
*/
export type ReadItemsQueryResponse = ItemsPublic;
export type ReadItemsQuery = {
    Response: ReadItemsQueryResponse;
    QueryParams: ReadItemsQueryParams;
    Errors: ReadItems422;
};