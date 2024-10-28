import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { LoginAccessTokenMutationRequest, LoginAccessTokenMutationResponse, LoginAccessToken422 } from "../types/LoginAccessToken";
import type { UseMutationOptions } from "@tanstack/react-query";

 type LoginAccessTokenClient = typeof client<LoginAccessTokenMutationResponse, LoginAccessToken422, LoginAccessTokenMutationRequest>;
type LoginAccessToken = {
    data: LoginAccessTokenMutationResponse;
    error: LoginAccessToken422;
    request: LoginAccessTokenMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: LoginAccessTokenMutationResponse;
    client: {
        parameters: Partial<Parameters<LoginAccessTokenClient>[0]>;
        return: Awaited<ReturnType<LoginAccessTokenClient>>;
    };
};
/**
 * @description OAuth2 compatible token login, get an access token for future requests
 * @summary Login Access Token
 * @link /api/v1/login/access-token
 */
export function useLoginAccessToken(options: {
    mutation?: UseMutationOptions<LoginAccessToken["response"], LoginAccessToken["error"], LoginAccessToken["request"]>;
    client?: LoginAccessToken["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<LoginAccessToken["data"], LoginAccessToken["error"], LoginAccessToken["request"]>({
                method: "post",
                url: `/api/v1/login/access-token`,
                data,
                headers: { "Content-Type": "application/x-www-form-urlencoded", ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}