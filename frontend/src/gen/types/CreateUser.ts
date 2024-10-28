import type { UserPublic } from "./UserPublic";
import type { HttpValidationError } from "./HttpValidationError";
import type { UserCreate } from "./UserCreate";

 /**
 * @description Successful Response
*/
export type CreateUser200 = UserPublic;
/**
 * @description Validation Error
*/
export type CreateUser422 = HttpValidationError;
export type CreateUserMutationRequest = UserCreate;
/**
 * @description Successful Response
*/
export type CreateUserMutationResponse = UserPublic;
export type CreateUserMutation = {
    Response: CreateUserMutationResponse;
    Request: CreateUserMutationRequest;
    Errors: CreateUser422;
};