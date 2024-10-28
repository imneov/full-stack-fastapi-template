import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { DeleteUserMutationResponse, DeleteUserPathParams, DeleteUser422 } from "../types/DeleteUser";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteUserClient = typeof client<DeleteUserMutationResponse, DeleteUser422, never>;
type DeleteUser = {
    data: DeleteUserMutationResponse;
    error: DeleteUser422;
    request: never;
    pathParams: DeleteUserPathParams;
    queryParams: never;
    headerParams: never;
    response: DeleteUserMutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteUserClient>[0]>;
        return: Awaited<ReturnType<DeleteUserClient>>;
    };
};
/**
 * @description Delete a user.
 * @summary Delete User
 * @link /api/v1/users/:user_id
 */
export function useDeleteUser(userId: DeleteUserPathParams["user_id"], options: {
    mutation?: UseMutationOptions<DeleteUser["response"], DeleteUser["error"], DeleteUser["request"]>;
    client?: DeleteUser["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteUser["data"], DeleteUser["error"], DeleteUser["request"]>({
                method: "delete",
                url: `/api/v1/users/${userId}`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}