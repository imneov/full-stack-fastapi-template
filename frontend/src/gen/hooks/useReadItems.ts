import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ReadItemsQueryResponse, ReadItemsQueryParams, ReadItems422 } from "../types/ReadItems";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ReadItemsClient = typeof client<ReadItemsQueryResponse, ReadItems422, never>;
type ReadItems = {
    data: ReadItemsQueryResponse;
    error: ReadItems422;
    request: never;
    pathParams: never;
    queryParams: ReadItemsQueryParams;
    headerParams: never;
    response: ReadItemsQueryResponse;
    client: {
        parameters: Partial<Parameters<ReadItemsClient>[0]>;
        return: Awaited<ReturnType<ReadItemsClient>>;
    };
};
export const readItemsQueryKey = (params?: ReadItems["queryParams"]) => [{ url: "/api/v1/items/" }, ...(params ? [params] : [])] as const;
export type ReadItemsQueryKey = ReturnType<typeof readItemsQueryKey>;
export function readItemsQueryOptions(params?: ReadItems["queryParams"], options: ReadItems["client"]["parameters"] = {}) {
    const queryKey = readItemsQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadItems["data"], ReadItems["error"]>({
                method: "get",
                url: `/api/v1/items/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Retrieve items.
 * @summary Read Items
 * @link /api/v1/items/
 */
export function useReadItems<TData = ReadItems["response"], TQueryData = ReadItems["response"], TQueryKey extends QueryKey = ReadItemsQueryKey>(params?: ReadItems["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ReadItems["response"], ReadItems["error"], TData, TQueryData, TQueryKey>>;
    client?: ReadItems["client"]["parameters"];
} = {}): UseQueryResult<TData, ReadItems["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readItemsQueryKey(params);
    const query = useQuery({
        ...readItemsQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ReadItems["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const readItemsSuspenseQueryKey = (params?: ReadItems["queryParams"]) => [{ url: "/api/v1/items/" }, ...(params ? [params] : [])] as const;
export type ReadItemsSuspenseQueryKey = ReturnType<typeof readItemsSuspenseQueryKey>;
export function readItemsSuspenseQueryOptions(params?: ReadItems["queryParams"], options: ReadItems["client"]["parameters"] = {}) {
    const queryKey = readItemsSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadItems["data"], ReadItems["error"]>({
                method: "get",
                url: `/api/v1/items/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Retrieve items.
 * @summary Read Items
 * @link /api/v1/items/
 */
export function useReadItemsSuspense<TData = ReadItems["response"], TQueryKey extends QueryKey = ReadItemsSuspenseQueryKey>(params?: ReadItems["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ReadItems["response"], ReadItems["error"], TData, TQueryKey>>;
    client?: ReadItems["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ReadItems["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readItemsSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...readItemsSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ReadItems["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}