import type { UserPublic } from "./UserPublic";
import type { HttpValidationError } from "./HttpValidationError";
import type { UserUpdate } from "./UserUpdate";

 export type UpdateUserPathParams = {
    /**
     * @type string, uuid
    */
    user_id: string;
};
/**
 * @description Successful Response
*/
export type UpdateUser200 = UserPublic;
/**
 * @description Validation Error
*/
export type UpdateUser422 = HttpValidationError;
export type UpdateUserMutationRequest = UserUpdate;
/**
 * @description Successful Response
*/
export type UpdateUserMutationResponse = UserPublic;
export type UpdateUserMutation = {
    Response: UpdateUserMutationResponse;
    Request: UpdateUserMutationRequest;
    PathParams: UpdateUserPathParams;
    Errors: UpdateUser422;
};