import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { UpdateItemMutationRequest, UpdateItemMutationResponse, UpdateItemPathParams, UpdateItem422 } from "../types/UpdateItem";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdateItemClient = typeof client<UpdateItemMutationResponse, UpdateItem422, UpdateItemMutationRequest>;
type UpdateItem = {
    data: UpdateItemMutationResponse;
    error: UpdateItem422;
    request: UpdateItemMutationRequest;
    pathParams: UpdateItemPathParams;
    queryParams: never;
    headerParams: never;
    response: UpdateItemMutationResponse;
    client: {
        parameters: Partial<Parameters<UpdateItemClient>[0]>;
        return: Awaited<ReturnType<UpdateItemClient>>;
    };
};
/**
 * @description Update an item.
 * @summary Update Item
 * @link /api/v1/items/:id
 */
export function useUpdateItem(id: UpdateItemPathParams["id"], options: {
    mutation?: UseMutationOptions<UpdateItem["response"], UpdateItem["error"], UpdateItem["request"]>;
    client?: UpdateItem["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UpdateItem["data"], UpdateItem["error"], UpdateItem["request"]>({
                method: "put",
                url: `/api/v1/items/${id}`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}