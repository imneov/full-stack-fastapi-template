import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ReadUserMeQueryResponse } from "../types/ReadUserMe";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ReadUserMeClient = typeof client<ReadUserMeQueryResponse, Error, never>;
type ReadUserMe = {
    data: ReadUserMeQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: ReadUserMeQueryResponse;
    client: {
        parameters: Partial<Parameters<ReadUserMeClient>[0]>;
        return: Awaited<ReturnType<ReadUserMeClient>>;
    };
};
export const readUserMeQueryKey = () => [{ url: "/api/v1/users/me" }] as const;
export type ReadUserMeQueryKey = ReturnType<typeof readUserMeQueryKey>;
export function readUserMeQueryOptions(options: ReadUserMe["client"]["parameters"] = {}) {
    const queryKey = readUserMeQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadUserMe["data"], ReadUserMe["error"]>({
                method: "get",
                url: `/api/v1/users/me`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Get current user.
 * @summary Read User Me
 * @link /api/v1/users/me
 */
export function useReadUserMe<TData = ReadUserMe["response"], TQueryData = ReadUserMe["response"], TQueryKey extends QueryKey = ReadUserMeQueryKey>(options: {
    query?: Partial<QueryObserverOptions<ReadUserMe["response"], ReadUserMe["error"], TData, TQueryData, TQueryKey>>;
    client?: ReadUserMe["client"]["parameters"];
} = {}): UseQueryResult<TData, ReadUserMe["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readUserMeQueryKey();
    const query = useQuery({
        ...readUserMeQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ReadUserMe["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const readUserMeSuspenseQueryKey = () => [{ url: "/api/v1/users/me" }] as const;
export type ReadUserMeSuspenseQueryKey = ReturnType<typeof readUserMeSuspenseQueryKey>;
export function readUserMeSuspenseQueryOptions(options: ReadUserMe["client"]["parameters"] = {}) {
    const queryKey = readUserMeSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadUserMe["data"], ReadUserMe["error"]>({
                method: "get",
                url: `/api/v1/users/me`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Get current user.
 * @summary Read User Me
 * @link /api/v1/users/me
 */
export function useReadUserMeSuspense<TData = ReadUserMe["response"], TQueryKey extends QueryKey = ReadUserMeSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<ReadUserMe["response"], ReadUserMe["error"], TData, TQueryKey>>;
    client?: ReadUserMe["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ReadUserMe["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readUserMeSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...readUserMeSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ReadUserMe["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}