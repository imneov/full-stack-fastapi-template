import type { ItemPublic } from "./ItemPublic";
import type { HttpValidationError } from "./HttpValidationError";
import type { ItemUpdate } from "./ItemUpdate";

 export type UpdateItemPathParams = {
    /**
     * @type string, uuid
    */
    id: string;
};
/**
 * @description Successful Response
*/
export type UpdateItem200 = ItemPublic;
/**
 * @description Validation Error
*/
export type UpdateItem422 = HttpValidationError;
export type UpdateItemMutationRequest = ItemUpdate;
/**
 * @description Successful Response
*/
export type UpdateItemMutationResponse = ItemPublic;
export type UpdateItemMutation = {
    Response: UpdateItemMutationResponse;
    Request: UpdateItemMutationRequest;
    PathParams: UpdateItemPathParams;
    Errors: UpdateItem422;
};