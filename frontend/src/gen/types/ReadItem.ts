import type { ItemPublic } from "./ItemPublic";
import type { HttpValidationError } from "./HttpValidationError";

 export type ReadItemPathParams = {
    /**
     * @type string, uuid
    */
    id: string;
};
/**
 * @description Successful Response
*/
export type ReadItem200 = ItemPublic;
/**
 * @description Validation Error
*/
export type ReadItem422 = HttpValidationError;
/**
 * @description Successful Response
*/
export type ReadItemQueryResponse = ItemPublic;
export type ReadItemQuery = {
    Response: ReadItemQueryResponse;
    PathParams: ReadItemPathParams;
    Errors: ReadItem422;
};