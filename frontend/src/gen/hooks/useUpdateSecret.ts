import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { UpdateSecretMutationRequest, UpdateSecretMutationResponse, UpdateSecretPathParams, UpdateSecret422 } from "../types/UpdateSecret";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdateSecretClient = typeof client<UpdateSecretMutationResponse, UpdateSecret422, UpdateSecretMutationRequest>;
type UpdateSecret = {
    data: UpdateSecretMutationResponse;
    error: UpdateSecret422;
    request: UpdateSecretMutationRequest;
    pathParams: UpdateSecretPathParams;
    queryParams: never;
    headerParams: never;
    response: UpdateSecretMutationResponse;
    client: {
        parameters: Partial<Parameters<UpdateSecretClient>[0]>;
        return: Awaited<ReturnType<UpdateSecretClient>>;
    };
};
/**
 * @description Update an secret.
 * @summary Update Secret
 * @link /api/v1/secrets/:id
 */
export function useUpdateSecret(id: UpdateSecretPathParams["id"], options: {
    mutation?: UseMutationOptions<UpdateSecret["response"], UpdateSecret["error"], UpdateSecret["request"]>;
    client?: UpdateSecret["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UpdateSecret["data"], UpdateSecret["error"], UpdateSecret["request"]>({
                method: "put",
                url: `/api/v1/secrets/${id}`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}