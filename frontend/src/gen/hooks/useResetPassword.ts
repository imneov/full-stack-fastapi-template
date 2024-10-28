import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { ResetPasswordMutationRequest, ResetPasswordMutationResponse, ResetPassword422 } from "../types/ResetPassword";
import type { UseMutationOptions } from "@tanstack/react-query";

 type ResetPasswordClient = typeof client<ResetPasswordMutationResponse, ResetPassword422, ResetPasswordMutationRequest>;
type ResetPassword = {
    data: ResetPasswordMutationResponse;
    error: ResetPassword422;
    request: ResetPasswordMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: ResetPasswordMutationResponse;
    client: {
        parameters: Partial<Parameters<ResetPasswordClient>[0]>;
        return: Awaited<ReturnType<ResetPasswordClient>>;
    };
};
/**
 * @description Reset password
 * @summary Reset Password
 * @link /api/v1/reset-password/
 */
export function useResetPassword(options: {
    mutation?: UseMutationOptions<ResetPassword["response"], ResetPassword["error"], ResetPassword["request"]>;
    client?: ResetPassword["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<ResetPassword["data"], ResetPassword["error"], ResetPassword["request"]>({
                method: "post",
                url: `/api/v1/reset-password/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}