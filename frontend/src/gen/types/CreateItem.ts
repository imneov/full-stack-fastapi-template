import type { ItemPublic } from "./ItemPublic";
import type { HttpValidationError } from "./HttpValidationError";
import type { ItemCreate } from "./ItemCreate";

 /**
 * @description Successful Response
*/
export type CreateItem200 = ItemPublic;
/**
 * @description Validation Error
*/
export type CreateItem422 = HttpValidationError;
export type CreateItemMutationRequest = ItemCreate;
/**
 * @description Successful Response
*/
export type CreateItemMutationResponse = ItemPublic;
export type CreateItemMutation = {
    Response: CreateItemMutationResponse;
    Request: CreateItemMutationRequest;
    Errors: CreateItem422;
};