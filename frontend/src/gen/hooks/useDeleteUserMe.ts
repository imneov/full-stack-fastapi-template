import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { DeleteUserMeMutationResponse } from "../types/DeleteUserMe";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteUserMeClient = typeof client<DeleteUserMeMutationResponse, Error, never>;
type DeleteUserMe = {
    data: DeleteUserMeMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: DeleteUserMeMutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteUserMeClient>[0]>;
        return: Awaited<ReturnType<DeleteUserMeClient>>;
    };
};
/**
 * @description Delete own user.
 * @summary Delete User Me
 * @link /api/v1/users/me
 */
export function useDeleteUserMe(options: {
    mutation?: UseMutationOptions<DeleteUserMe["response"], DeleteUserMe["error"], DeleteUserMe["request"]>;
    client?: DeleteUserMe["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteUserMe["data"], DeleteUserMe["error"], DeleteUserMe["request"]>({
                method: "delete",
                url: `/api/v1/users/me`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}