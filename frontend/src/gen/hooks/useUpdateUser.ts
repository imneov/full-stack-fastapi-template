import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { UpdateUserMutationRequest, UpdateUserMutationResponse, UpdateUserPathParams, UpdateUser422 } from "../types/UpdateUser";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdateUserClient = typeof client<UpdateUserMutationResponse, UpdateUser422, UpdateUserMutationRequest>;
type UpdateUser = {
    data: UpdateUserMutationResponse;
    error: UpdateUser422;
    request: UpdateUserMutationRequest;
    pathParams: UpdateUserPathParams;
    queryParams: never;
    headerParams: never;
    response: UpdateUserMutationResponse;
    client: {
        parameters: Partial<Parameters<UpdateUserClient>[0]>;
        return: Awaited<ReturnType<UpdateUserClient>>;
    };
};
/**
 * @description Update a user.
 * @summary Update User
 * @link /api/v1/users/:user_id
 */
export function useUpdateUser(userId: UpdateUserPathParams["user_id"], options: {
    mutation?: UseMutationOptions<UpdateUser["response"], UpdateUser["error"], UpdateUser["request"]>;
    client?: UpdateUser["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UpdateUser["data"], UpdateUser["error"], UpdateUser["request"]>({
                method: "patch",
                url: `/api/v1/users/${userId}`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}