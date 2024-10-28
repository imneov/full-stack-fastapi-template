import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { UpdatePasswordMeMutationRequest, UpdatePasswordMeMutationResponse, UpdatePasswordMe422 } from "../types/UpdatePasswordMe";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdatePasswordMeClient = typeof client<UpdatePasswordMeMutationResponse, UpdatePasswordMe422, UpdatePasswordMeMutationRequest>;
type UpdatePasswordMe = {
    data: UpdatePasswordMeMutationResponse;
    error: UpdatePasswordMe422;
    request: UpdatePasswordMeMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UpdatePasswordMeMutationResponse;
    client: {
        parameters: Partial<Parameters<UpdatePasswordMeClient>[0]>;
        return: Awaited<ReturnType<UpdatePasswordMeClient>>;
    };
};
/**
 * @description Update own password.
 * @summary Update Password Me
 * @link /api/v1/users/me/password
 */
export function useUpdatePasswordMe(options: {
    mutation?: UseMutationOptions<UpdatePasswordMe["response"], UpdatePasswordMe["error"], UpdatePasswordMe["request"]>;
    client?: UpdatePasswordMe["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UpdatePasswordMe["data"], UpdatePasswordMe["error"], UpdatePasswordMe["request"]>({
                method: "patch",
                url: `/api/v1/users/me/password`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}