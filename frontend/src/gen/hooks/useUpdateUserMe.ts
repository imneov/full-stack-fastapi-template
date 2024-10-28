import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { UpdateUserMeMutationRequest, UpdateUserMeMutationResponse, UpdateUserMe422 } from "../types/UpdateUserMe";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdateUserMeClient = typeof client<UpdateUserMeMutationResponse, UpdateUserMe422, UpdateUserMeMutationRequest>;
type UpdateUserMe = {
    data: UpdateUserMeMutationResponse;
    error: UpdateUserMe422;
    request: UpdateUserMeMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UpdateUserMeMutationResponse;
    client: {
        parameters: Partial<Parameters<UpdateUserMeClient>[0]>;
        return: Awaited<ReturnType<UpdateUserMeClient>>;
    };
};
/**
 * @description Update own user.
 * @summary Update User Me
 * @link /api/v1/users/me
 */
export function useUpdateUserMe(options: {
    mutation?: UseMutationOptions<UpdateUserMe["response"], UpdateUserMe["error"], UpdateUserMe["request"]>;
    client?: UpdateUserMe["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UpdateUserMe["data"], UpdateUserMe["error"], UpdateUserMe["request"]>({
                method: "patch",
                url: `/api/v1/users/me`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}