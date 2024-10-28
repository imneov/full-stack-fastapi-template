import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { CreateUserMutationRequest, CreateUserMutationResponse, CreateUser422 } from "../types/CreateUser";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CreateUserClient = typeof client<CreateUserMutationResponse, CreateUser422, CreateUserMutationRequest>;
type CreateUser = {
    data: CreateUserMutationResponse;
    error: CreateUser422;
    request: CreateUserMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CreateUserMutationResponse;
    client: {
        parameters: Partial<Parameters<CreateUserClient>[0]>;
        return: Awaited<ReturnType<CreateUserClient>>;
    };
};
/**
 * @description Create new user.
 * @summary Create User
 * @link /api/v1/users/
 */
export function useCreateUser(options: {
    mutation?: UseMutationOptions<CreateUser["response"], CreateUser["error"], CreateUser["request"]>;
    client?: CreateUser["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CreateUser["data"], CreateUser["error"], CreateUser["request"]>({
                method: "post",
                url: `/api/v1/users/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}