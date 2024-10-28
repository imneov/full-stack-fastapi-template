import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ReadUserByIdQueryResponse, ReadUserByIdPathParams, ReadUserById422 } from "../types/ReadUserById";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ReadUserByIdClient = typeof client<ReadUserByIdQueryResponse, ReadUserById422, never>;
type ReadUserById = {
    data: ReadUserByIdQueryResponse;
    error: ReadUserById422;
    request: never;
    pathParams: ReadUserByIdPathParams;
    queryParams: never;
    headerParams: never;
    response: ReadUserByIdQueryResponse;
    client: {
        parameters: Partial<Parameters<ReadUserByIdClient>[0]>;
        return: Awaited<ReturnType<ReadUserByIdClient>>;
    };
};
export const readUserByIdQueryKey = (userId: ReadUserByIdPathParams["user_id"]) => [{ url: "/api/v1/users/:user_id", params: { userId: userId } }] as const;
export type ReadUserByIdQueryKey = ReturnType<typeof readUserByIdQueryKey>;
export function readUserByIdQueryOptions(userId: ReadUserByIdPathParams["user_id"], options: ReadUserById["client"]["parameters"] = {}) {
    const queryKey = readUserByIdQueryKey(userId);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadUserById["data"], ReadUserById["error"]>({
                method: "get",
                url: `/api/v1/users/${userId}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Get a specific user by id.
 * @summary Read User By Id
 * @link /api/v1/users/:user_id
 */
export function useReadUserById<TData = ReadUserById["response"], TQueryData = ReadUserById["response"], TQueryKey extends QueryKey = ReadUserByIdQueryKey>(userId: ReadUserByIdPathParams["user_id"], options: {
    query?: Partial<QueryObserverOptions<ReadUserById["response"], ReadUserById["error"], TData, TQueryData, TQueryKey>>;
    client?: ReadUserById["client"]["parameters"];
} = {}): UseQueryResult<TData, ReadUserById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readUserByIdQueryKey(userId);
    const query = useQuery({
        ...readUserByIdQueryOptions(userId, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ReadUserById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const readUserByIdSuspenseQueryKey = (userId: ReadUserByIdPathParams["user_id"]) => [{ url: "/api/v1/users/:user_id", params: { userId: userId } }] as const;
export type ReadUserByIdSuspenseQueryKey = ReturnType<typeof readUserByIdSuspenseQueryKey>;
export function readUserByIdSuspenseQueryOptions(userId: ReadUserByIdPathParams["user_id"], options: ReadUserById["client"]["parameters"] = {}) {
    const queryKey = readUserByIdSuspenseQueryKey(userId);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadUserById["data"], ReadUserById["error"]>({
                method: "get",
                url: `/api/v1/users/${userId}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Get a specific user by id.
 * @summary Read User By Id
 * @link /api/v1/users/:user_id
 */
export function useReadUserByIdSuspense<TData = ReadUserById["response"], TQueryKey extends QueryKey = ReadUserByIdSuspenseQueryKey>(userId: ReadUserByIdPathParams["user_id"], options: {
    query?: Partial<UseSuspenseQueryOptions<ReadUserById["response"], ReadUserById["error"], TData, TQueryKey>>;
    client?: ReadUserById["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ReadUserById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readUserByIdSuspenseQueryKey(userId);
    const query = useSuspenseQuery({
        ...readUserByIdSuspenseQueryOptions(userId, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ReadUserById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}