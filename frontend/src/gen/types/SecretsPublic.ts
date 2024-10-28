import type { SecretPublic } from "./SecretPublic";

 export type SecretsPublic = {
    /**
     * @type array
    */
    data: SecretPublic[];
    /**
     * @type integer
    */
    count: number;
};