import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ReadSecretQueryResponse, ReadSecretPathParams, ReadSecret422 } from "../types/ReadSecret";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ReadSecretClient = typeof client<ReadSecretQueryResponse, ReadSecret422, never>;
type ReadSecret = {
    data: ReadSecretQueryResponse;
    error: ReadSecret422;
    request: never;
    pathParams: ReadSecretPathParams;
    queryParams: never;
    headerParams: never;
    response: ReadSecretQueryResponse;
    client: {
        parameters: Partial<Parameters<ReadSecretClient>[0]>;
        return: Awaited<ReturnType<ReadSecretClient>>;
    };
};
export const readSecretQueryKey = (id: ReadSecretPathParams["id"]) => [{ url: "/api/v1/secrets/:id", params: { id: id } }] as const;
export type ReadSecretQueryKey = ReturnType<typeof readSecretQueryKey>;
export function readSecretQueryOptions(id: ReadSecretPathParams["id"], options: ReadSecret["client"]["parameters"] = {}) {
    const queryKey = readSecretQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadSecret["data"], ReadSecret["error"]>({
                method: "get",
                url: `/api/v1/secrets/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Get secret by ID.
 * @summary Read Secret
 * @link /api/v1/secrets/:id
 */
export function useReadSecret<TData = ReadSecret["response"], TQueryData = ReadSecret["response"], TQueryKey extends QueryKey = ReadSecretQueryKey>(id: ReadSecretPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<ReadSecret["response"], ReadSecret["error"], TData, TQueryData, TQueryKey>>;
    client?: ReadSecret["client"]["parameters"];
} = {}): UseQueryResult<TData, ReadSecret["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readSecretQueryKey(id);
    const query = useQuery({
        ...readSecretQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ReadSecret["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const readSecretSuspenseQueryKey = (id: ReadSecretPathParams["id"]) => [{ url: "/api/v1/secrets/:id", params: { id: id } }] as const;
export type ReadSecretSuspenseQueryKey = ReturnType<typeof readSecretSuspenseQueryKey>;
export function readSecretSuspenseQueryOptions(id: ReadSecretPathParams["id"], options: ReadSecret["client"]["parameters"] = {}) {
    const queryKey = readSecretSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadSecret["data"], ReadSecret["error"]>({
                method: "get",
                url: `/api/v1/secrets/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Get secret by ID.
 * @summary Read Secret
 * @link /api/v1/secrets/:id
 */
export function useReadSecretSuspense<TData = ReadSecret["response"], TQueryKey extends QueryKey = ReadSecretSuspenseQueryKey>(id: ReadSecretPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<ReadSecret["response"], ReadSecret["error"], TData, TQueryKey>>;
    client?: ReadSecret["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ReadSecret["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readSecretSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...readSecretSuspenseQueryOptions(id, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ReadSecret["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}