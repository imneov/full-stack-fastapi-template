import type { UserPublic } from "./UserPublic";

 export type UsersPublic = {
    /**
     * @type array
    */
    data: UserPublic[];
    /**
     * @type integer
    */
    count: number;
};