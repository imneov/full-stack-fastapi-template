import type { HttpValidationError } from "./HttpValidationError";

 export type RecoverPasswordHtmlContentPathParams = {
    /**
     * @type string
    */
    email: string;
};
/**
 * @description Successful Response
*/
export type RecoverPasswordHtmlContent200 = string;
/**
 * @description Validation Error
*/
export type RecoverPasswordHtmlContent422 = HttpValidationError;
/**
 * @description Successful Response
*/
export type RecoverPasswordHtmlContentMutationResponse = string;
export type RecoverPasswordHtmlContentMutation = {
    Response: RecoverPasswordHtmlContentMutationResponse;
    PathParams: RecoverPasswordHtmlContentPathParams;
    Errors: RecoverPasswordHtmlContent422;
};