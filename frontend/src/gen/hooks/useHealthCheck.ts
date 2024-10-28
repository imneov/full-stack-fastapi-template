import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { HealthCheckQueryResponse } from "../types/HealthCheck";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type HealthCheckClient = typeof client<HealthCheckQueryResponse, Error, never>;
type HealthCheck = {
    data: HealthCheckQueryResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: HealthCheckQueryResponse;
    client: {
        parameters: Partial<Parameters<HealthCheckClient>[0]>;
        return: Awaited<ReturnType<HealthCheckClient>>;
    };
};
export const healthCheckQueryKey = () => [{ url: "/api/v1/utils/health-check/" }] as const;
export type HealthCheckQueryKey = ReturnType<typeof healthCheckQueryKey>;
export function healthCheckQueryOptions(options: HealthCheck["client"]["parameters"] = {}) {
    const queryKey = healthCheckQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<HealthCheck["data"], HealthCheck["error"]>({
                method: "get",
                url: `/api/v1/utils/health-check/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Health Check
 * @link /api/v1/utils/health-check/
 */
export function useHealthCheck<TData = HealthCheck["response"], TQueryData = HealthCheck["response"], TQueryKey extends QueryKey = HealthCheckQueryKey>(options: {
    query?: Partial<QueryObserverOptions<HealthCheck["response"], HealthCheck["error"], TData, TQueryData, TQueryKey>>;
    client?: HealthCheck["client"]["parameters"];
} = {}): UseQueryResult<TData, HealthCheck["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? healthCheckQueryKey();
    const query = useQuery({
        ...healthCheckQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, HealthCheck["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const healthCheckSuspenseQueryKey = () => [{ url: "/api/v1/utils/health-check/" }] as const;
export type HealthCheckSuspenseQueryKey = ReturnType<typeof healthCheckSuspenseQueryKey>;
export function healthCheckSuspenseQueryOptions(options: HealthCheck["client"]["parameters"] = {}) {
    const queryKey = healthCheckSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<HealthCheck["data"], HealthCheck["error"]>({
                method: "get",
                url: `/api/v1/utils/health-check/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Health Check
 * @link /api/v1/utils/health-check/
 */
export function useHealthCheckSuspense<TData = HealthCheck["response"], TQueryKey extends QueryKey = HealthCheckSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<HealthCheck["response"], HealthCheck["error"], TData, TQueryKey>>;
    client?: HealthCheck["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, HealthCheck["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? healthCheckSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...healthCheckSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, HealthCheck["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}