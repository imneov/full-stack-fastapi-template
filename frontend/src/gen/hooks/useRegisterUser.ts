import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { RegisterUserMutationRequest, RegisterUserMutationResponse, RegisterUser422 } from "../types/RegisterUser";
import type { UseMutationOptions } from "@tanstack/react-query";

 type RegisterUserClient = typeof client<RegisterUserMutationResponse, RegisterUser422, RegisterUserMutationRequest>;
type RegisterUser = {
    data: RegisterUserMutationResponse;
    error: RegisterUser422;
    request: RegisterUserMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: RegisterUserMutationResponse;
    client: {
        parameters: Partial<Parameters<RegisterUserClient>[0]>;
        return: Awaited<ReturnType<RegisterUserClient>>;
    };
};
/**
 * @description Create new user without the need to be logged in.
 * @summary Register User
 * @link /api/v1/users/signup
 */
export function useRegisterUser(options: {
    mutation?: UseMutationOptions<RegisterUser["response"], RegisterUser["error"], RegisterUser["request"]>;
    client?: RegisterUser["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<RegisterUser["data"], RegisterUser["error"], RegisterUser["request"]>({
                method: "post",
                url: `/api/v1/users/signup`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}