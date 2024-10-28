import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { CreateSecretMutationRequest, CreateSecretMutationResponse, CreateSecret422 } from "../types/CreateSecret";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CreateSecretClient = typeof client<CreateSecretMutationResponse, CreateSecret422, CreateSecretMutationRequest>;
type CreateSecret = {
    data: CreateSecretMutationResponse;
    error: CreateSecret422;
    request: CreateSecretMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CreateSecretMutationResponse;
    client: {
        parameters: Partial<Parameters<CreateSecretClient>[0]>;
        return: Awaited<ReturnType<CreateSecretClient>>;
    };
};
/**
 * @description Create new secret.
 * @summary Create Secret
 * @link /api/v1/secrets/
 */
export function useCreateSecret(options: {
    mutation?: UseMutationOptions<CreateSecret["response"], CreateSecret["error"], CreateSecret["request"]>;
    client?: CreateSecret["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CreateSecret["data"], CreateSecret["error"], CreateSecret["request"]>({
                method: "post",
                url: `/api/v1/secrets/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}