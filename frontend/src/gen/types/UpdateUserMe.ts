import type { UserPublic } from "./UserPublic";
import type { HttpValidationError } from "./HttpValidationError";
import type { UserUpdateMe } from "./UserUpdateMe";

 /**
 * @description Successful Response
*/
export type UpdateUserMe200 = UserPublic;
/**
 * @description Validation Error
*/
export type UpdateUserMe422 = HttpValidationError;
export type UpdateUserMeMutationRequest = UserUpdateMe;
/**
 * @description Successful Response
*/
export type UpdateUserMeMutationResponse = UserPublic;
export type UpdateUserMeMutation = {
    Response: UpdateUserMeMutationResponse;
    Request: UpdateUserMeMutationRequest;
    Errors: UpdateUserMe422;
};