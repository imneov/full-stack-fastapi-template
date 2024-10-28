import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { TestEmailMutationResponse, TestEmailQueryParams, TestEmail422 } from "../types/TestEmail";
import type { UseMutationOptions } from "@tanstack/react-query";

 type TestEmailClient = typeof client<TestEmailMutationResponse, TestEmail422, never>;
type TestEmail = {
    data: TestEmailMutationResponse;
    error: TestEmail422;
    request: never;
    pathParams: never;
    queryParams: TestEmailQueryParams;
    headerParams: never;
    response: TestEmailMutationResponse;
    client: {
        parameters: Partial<Parameters<TestEmailClient>[0]>;
        return: Awaited<ReturnType<TestEmailClient>>;
    };
};
/**
 * @description Test emails.
 * @summary Test Email
 * @link /api/v1/utils/test-email/
 */
export function useTestEmail(params: TestEmail["queryParams"], options: {
    mutation?: UseMutationOptions<TestEmail["response"], TestEmail["error"], TestEmail["request"]>;
    client?: TestEmail["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<TestEmail["data"], TestEmail["error"], TestEmail["request"]>({
                method: "post",
                url: `/api/v1/utils/test-email/`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}