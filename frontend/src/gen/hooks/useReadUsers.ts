import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ReadUsersQueryResponse, ReadUsersQueryParams, ReadUsers422 } from "../types/ReadUsers";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ReadUsersClient = typeof client<ReadUsersQueryResponse, ReadUsers422, never>;
type ReadUsers = {
    data: ReadUsersQueryResponse;
    error: ReadUsers422;
    request: never;
    pathParams: never;
    queryParams: ReadUsersQueryParams;
    headerParams: never;
    response: ReadUsersQueryResponse;
    client: {
        parameters: Partial<Parameters<ReadUsersClient>[0]>;
        return: Awaited<ReturnType<ReadUsersClient>>;
    };
};
export const readUsersQueryKey = (params?: ReadUsers["queryParams"]) => [{ url: "/api/v1/users/" }, ...(params ? [params] : [])] as const;
export type ReadUsersQueryKey = ReturnType<typeof readUsersQueryKey>;
export function readUsersQueryOptions(params?: ReadUsers["queryParams"], options: ReadUsers["client"]["parameters"] = {}) {
    const queryKey = readUsersQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadUsers["data"], ReadUsers["error"]>({
                method: "get",
                url: `/api/v1/users/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Retrieve users.
 * @summary Read Users
 * @link /api/v1/users/
 */
export function useReadUsers<TData = ReadUsers["response"], TQueryData = ReadUsers["response"], TQueryKey extends QueryKey = ReadUsersQueryKey>(params?: ReadUsers["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ReadUsers["response"], ReadUsers["error"], TData, TQueryData, TQueryKey>>;
    client?: ReadUsers["client"]["parameters"];
} = {}): UseQueryResult<TData, ReadUsers["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readUsersQueryKey(params);
    const query = useQuery({
        ...readUsersQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ReadUsers["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const readUsersSuspenseQueryKey = (params?: ReadUsers["queryParams"]) => [{ url: "/api/v1/users/" }, ...(params ? [params] : [])] as const;
export type ReadUsersSuspenseQueryKey = ReturnType<typeof readUsersSuspenseQueryKey>;
export function readUsersSuspenseQueryOptions(params?: ReadUsers["queryParams"], options: ReadUsers["client"]["parameters"] = {}) {
    const queryKey = readUsersSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadUsers["data"], ReadUsers["error"]>({
                method: "get",
                url: `/api/v1/users/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Retrieve users.
 * @summary Read Users
 * @link /api/v1/users/
 */
export function useReadUsersSuspense<TData = ReadUsers["response"], TQueryKey extends QueryKey = ReadUsersSuspenseQueryKey>(params?: ReadUsers["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ReadUsers["response"], ReadUsers["error"], TData, TQueryKey>>;
    client?: ReadUsers["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ReadUsers["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readUsersSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...readUsersSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ReadUsers["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}