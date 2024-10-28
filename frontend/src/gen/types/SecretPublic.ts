export type SecretPublic = {
    /**
     * @type string
    */
    title: string;
    description?: (string | null);
    /**
     * @type string, uuid
    */
    id: string;
    /**
     * @type string, uuid
    */
    owner_id: string;
};