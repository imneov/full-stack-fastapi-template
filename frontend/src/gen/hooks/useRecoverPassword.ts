import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { RecoverPasswordMutationResponse, RecoverPasswordPathParams, RecoverPassword422 } from "../types/RecoverPassword";
import type { UseMutationOptions } from "@tanstack/react-query";

 type RecoverPasswordClient = typeof client<RecoverPasswordMutationResponse, RecoverPassword422, never>;
type RecoverPassword = {
    data: RecoverPasswordMutationResponse;
    error: RecoverPassword422;
    request: never;
    pathParams: RecoverPasswordPathParams;
    queryParams: never;
    headerParams: never;
    response: RecoverPasswordMutationResponse;
    client: {
        parameters: Partial<Parameters<RecoverPasswordClient>[0]>;
        return: Awaited<ReturnType<RecoverPasswordClient>>;
    };
};
/**
 * @description Password Recovery
 * @summary Recover Password
 * @link /api/v1/password-recovery/:email
 */
export function useRecoverPassword(email: RecoverPasswordPathParams["email"], options: {
    mutation?: UseMutationOptions<RecoverPassword["response"], RecoverPassword["error"], RecoverPassword["request"]>;
    client?: RecoverPassword["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<RecoverPassword["data"], RecoverPassword["error"], RecoverPassword["request"]>({
                method: "post",
                url: `/api/v1/password-recovery/${email}`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}