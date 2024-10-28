import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ReadSecretsQueryResponse, ReadSecretsQueryParams, ReadSecrets422 } from "../types/ReadSecrets";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ReadSecretsClient = typeof client<ReadSecretsQueryResponse, ReadSecrets422, never>;
type ReadSecrets = {
    data: ReadSecretsQueryResponse;
    error: ReadSecrets422;
    request: never;
    pathParams: never;
    queryParams: ReadSecretsQueryParams;
    headerParams: never;
    response: ReadSecretsQueryResponse;
    client: {
        parameters: Partial<Parameters<ReadSecretsClient>[0]>;
        return: Awaited<ReturnType<ReadSecretsClient>>;
    };
};
export const readSecretsQueryKey = (params?: ReadSecrets["queryParams"]) => [{ url: "/api/v1/secrets/" }, ...(params ? [params] : [])] as const;
export type ReadSecretsQueryKey = ReturnType<typeof readSecretsQueryKey>;
export function readSecretsQueryOptions(params?: ReadSecrets["queryParams"], options: ReadSecrets["client"]["parameters"] = {}) {
    const queryKey = readSecretsQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadSecrets["data"], ReadSecrets["error"]>({
                method: "get",
                url: `/api/v1/secrets/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Retrieve secrets.
 * @summary Read Secrets
 * @link /api/v1/secrets/
 */
export function useReadSecrets<TData = ReadSecrets["response"], TQueryData = ReadSecrets["response"], TQueryKey extends QueryKey = ReadSecretsQueryKey>(params?: ReadSecrets["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ReadSecrets["response"], ReadSecrets["error"], TData, TQueryData, TQueryKey>>;
    client?: ReadSecrets["client"]["parameters"];
} = {}): UseQueryResult<TData, ReadSecrets["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readSecretsQueryKey(params);
    const query = useQuery({
        ...readSecretsQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ReadSecrets["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const readSecretsSuspenseQueryKey = (params?: ReadSecrets["queryParams"]) => [{ url: "/api/v1/secrets/" }, ...(params ? [params] : [])] as const;
export type ReadSecretsSuspenseQueryKey = ReturnType<typeof readSecretsSuspenseQueryKey>;
export function readSecretsSuspenseQueryOptions(params?: ReadSecrets["queryParams"], options: ReadSecrets["client"]["parameters"] = {}) {
    const queryKey = readSecretsSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ReadSecrets["data"], ReadSecrets["error"]>({
                method: "get",
                url: `/api/v1/secrets/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Retrieve secrets.
 * @summary Read Secrets
 * @link /api/v1/secrets/
 */
export function useReadSecretsSuspense<TData = ReadSecrets["response"], TQueryKey extends QueryKey = ReadSecretsSuspenseQueryKey>(params?: ReadSecrets["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ReadSecrets["response"], ReadSecrets["error"], TData, TQueryKey>>;
    client?: ReadSecrets["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ReadSecrets["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? readSecretsSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...readSecretsSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ReadSecrets["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}