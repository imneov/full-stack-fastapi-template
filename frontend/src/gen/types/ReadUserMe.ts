import type { UserPublic } from "./UserPublic";

 /**
 * @description Successful Response
*/
export type ReadUserMe200 = UserPublic;
/**
 * @description Successful Response
*/
export type ReadUserMeQueryResponse = UserPublic;
export type ReadUserMeQuery = {
    Response: ReadUserMeQueryResponse;
};