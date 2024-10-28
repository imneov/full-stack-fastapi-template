import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { DeleteItemMutationResponse, DeleteItemPathParams, DeleteItem422 } from "../types/DeleteItem";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteItemClient = typeof client<DeleteItemMutationResponse, DeleteItem422, never>;
type DeleteItem = {
    data: DeleteItemMutationResponse;
    error: DeleteItem422;
    request: never;
    pathParams: DeleteItemPathParams;
    queryParams: never;
    headerParams: never;
    response: DeleteItemMutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteItemClient>[0]>;
        return: Awaited<ReturnType<DeleteItemClient>>;
    };
};
/**
 * @description Delete an item.
 * @summary Delete Item
 * @link /api/v1/items/:id
 */
export function useDeleteItem(id: DeleteItemPathParams["id"], options: {
    mutation?: UseMutationOptions<DeleteItem["response"], DeleteItem["error"], DeleteItem["request"]>;
    client?: DeleteItem["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteItem["data"], DeleteItem["error"], DeleteItem["request"]>({
                method: "delete",
                url: `/api/v1/items/${id}`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}