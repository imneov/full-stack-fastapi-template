import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { DeleteSecretMutationResponse, DeleteSecretPathParams, DeleteSecret422 } from "../types/DeleteSecret";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteSecretClient = typeof client<DeleteSecretMutationResponse, DeleteSecret422, never>;
type DeleteSecret = {
    data: DeleteSecretMutationResponse;
    error: DeleteSecret422;
    request: never;
    pathParams: DeleteSecretPathParams;
    queryParams: never;
    headerParams: never;
    response: DeleteSecretMutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteSecretClient>[0]>;
        return: Awaited<ReturnType<DeleteSecretClient>>;
    };
};
/**
 * @description Delete an secret.
 * @summary Delete Secret
 * @link /api/v1/secrets/:id
 */
export function useDeleteSecret(id: DeleteSecretPathParams["id"], options: {
    mutation?: UseMutationOptions<DeleteSecret["response"], DeleteSecret["error"], DeleteSecret["request"]>;
    client?: DeleteSecret["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteSecret["data"], DeleteSecret["error"], DeleteSecret["request"]>({
                method: "delete",
                url: `/api/v1/secrets/${id}`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}