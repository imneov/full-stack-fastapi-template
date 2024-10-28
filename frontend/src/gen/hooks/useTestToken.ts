import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { TestTokenMutationResponse } from "../types/TestToken";
import type { UseMutationOptions } from "@tanstack/react-query";

 type TestTokenClient = typeof client<TestTokenMutationResponse, Error, never>;
type TestToken = {
    data: TestTokenMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: TestTokenMutationResponse;
    client: {
        parameters: Partial<Parameters<TestTokenClient>[0]>;
        return: Awaited<ReturnType<TestTokenClient>>;
    };
};
/**
 * @description Test access token
 * @summary Test Token
 * @link /api/v1/login/test-token
 */
export function useTestToken(options: {
    mutation?: UseMutationOptions<TestToken["response"], TestToken["error"], TestToken["request"]>;
    client?: TestToken["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<TestToken["data"], TestToken["error"], TestToken["request"]>({
                method: "post",
                url: `/api/v1/login/test-token`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}