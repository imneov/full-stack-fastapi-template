import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { RecoverPasswordHtmlContentMutationResponse, RecoverPasswordHtmlContentPathParams, RecoverPasswordHtmlContent422 } from "../types/RecoverPasswordHtmlContent";
import type { UseMutationOptions } from "@tanstack/react-query";

 type RecoverPasswordHtmlContentClient = typeof client<RecoverPasswordHtmlContentMutationResponse, RecoverPasswordHtmlContent422, never>;
type RecoverPasswordHtmlContent = {
    data: RecoverPasswordHtmlContentMutationResponse;
    error: RecoverPasswordHtmlContent422;
    request: never;
    pathParams: RecoverPasswordHtmlContentPathParams;
    queryParams: never;
    headerParams: never;
    response: RecoverPasswordHtmlContentMutationResponse;
    client: {
        parameters: Partial<Parameters<RecoverPasswordHtmlContentClient>[0]>;
        return: Awaited<ReturnType<RecoverPasswordHtmlContentClient>>;
    };
};
/**
 * @description HTML Content for Password Recovery
 * @summary Recover Password Html Content
 * @link /api/v1/password-recovery-html-content/:email
 */
export function useRecoverPasswordHtmlContent(email: RecoverPasswordHtmlContentPathParams["email"], options: {
    mutation?: UseMutationOptions<RecoverPasswordHtmlContent["response"], RecoverPasswordHtmlContent["error"], RecoverPasswordHtmlContent["request"]>;
    client?: RecoverPasswordHtmlContent["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<RecoverPasswordHtmlContent["data"], RecoverPasswordHtmlContent["error"], RecoverPasswordHtmlContent["request"]>({
                method: "post",
                url: `/api/v1/password-recovery-html-content/${email}`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}