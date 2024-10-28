import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ReadItemQueryResponse, ReadItemPathParams, ReadItem422 } from "../types/ReadItem";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ReadItemClient = typeof client<ReadItemQueryResponse, ReadItem422, never>;
type ReadItem = {
    data: ReadItemQueryResponse;
    error: ReadItem422;
    request: never;
    pathParams: ReadItemPathParams;
    queryParams: never;
    headerParams: never;
    response: ReadItemQueryResponse;
    client: {
        parameters: Partial<Parameters<ReadItemClient>[0]>;
        return: Awaited<ReturnType<ReadItemClient>>;
    };
};
export const readItemQueryKey = (id: ReadItemPathParams["id"]) => [{ url: "/api/v1/items/:id", params: { id: id } }] as const;
export type ReadItemQueryKey = ReturnType<typeof readItemQueryKey>;
export function readItemQueryOptions(id: ReadItemPathParams["id"], options: ReadItem["client"]["parameters"] = {}) {
    const queryKey = readItemQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadItem["data"], ReadItem["error"]>({
                method: "get",
                url: `/api/v1/items/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Get item by ID.
 * @summary Read Item
 * @link /api/v1/items/:id
 */
export function useReadItem<TData = ReadItem["response"], TQueryData = ReadItem["response"], TQueryKey extends QueryKey = ReadItemQueryKey>(id: ReadItemPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<ReadItem["response"], ReadItem["error"], TData, TQueryData, TQueryKey>>;
    client?: ReadItem["client"]["parameters"];
} = {}): UseQueryResult<TData, ReadItem["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readItemQueryKey(id);
    const query = useQuery({
        ...readItemQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ReadItem["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const readItemSuspenseQueryKey = (id: ReadItemPathParams["id"]) => [{ url: "/api/v1/items/:id", params: { id: id } }] as const;
export type ReadItemSuspenseQueryKey = ReturnType<typeof readItemSuspenseQueryKey>;
export function readItemSuspenseQueryOptions(id: ReadItemPathParams["id"], options: ReadItem["client"]["parameters"] = {}) {
    const queryKey = readItemSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadItem["data"], ReadItem["error"]>({
                method: "get",
                url: `/api/v1/items/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Get item by ID.
 * @summary Read Item
 * @link /api/v1/items/:id
 */
export function useReadItemSuspense<TData = ReadItem["response"], TQueryKey extends QueryKey = ReadItemSuspenseQueryKey>(id: ReadItemPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<ReadItem["response"], ReadItem["error"], TData, TQueryKey>>;
    client?: ReadItem["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ReadItem["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readItemSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...readItemSuspenseQueryOptions(id, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ReadItem["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}