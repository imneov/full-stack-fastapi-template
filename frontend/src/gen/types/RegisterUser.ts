import type { UserPublic } from "./UserPublic";
import type { HttpValidationError } from "./HttpValidationError";
import type { UserRegister } from "./UserRegister";

 /**
 * @description Successful Response
*/
export type RegisterUser200 = UserPublic;
/**
 * @description Validation Error
*/
export type RegisterUser422 = HttpValidationError;
export type RegisterUserMutationRequest = UserRegister;
/**
 * @description Successful Response
*/
export type RegisterUserMutationResponse = UserPublic;
export type RegisterUserMutation = {
    Response: RegisterUserMutationResponse;
    Request: RegisterUserMutationRequest;
    Errors: RegisterUser422;
};