import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { CreateItemMutationRequest, CreateItemMutationResponse, CreateItem422 } from "../types/CreateItem";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CreateItemClient = typeof client<CreateItemMutationResponse, CreateItem422, CreateItemMutationRequest>;
type CreateItem = {
    data: CreateItemMutationResponse;
    error: CreateItem422;
    request: CreateItemMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CreateItemMutationResponse;
    client: {
        parameters: Partial<Parameters<CreateItemClient>[0]>;
        return: Awaited<ReturnType<CreateItemClient>>;
    };
};
/**
 * @description Create new item.
 * @summary Create Item
 * @link /api/v1/items/
 */
export function useCreateItem(options: {
    mutation?: UseMutationOptions<CreateItem["response"], CreateItem["error"], CreateItem["request"]>;
    client?: CreateItem["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CreateItem["data"], CreateItem["error"], CreateItem["request"]>({
                method: "post",
                url: `/api/v1/items/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}