export type UserPublic = {
    /**
     * @type string, email
    */
    email: string;
    /**
     * @default true
     * @type boolean | undefined
    */
    is_active?: boolean;
    /**
     * @default false
     * @type boolean | undefined
    */
    is_superuser?: boolean;
    full_name?: (string | null);
    /**
     * @type string, uuid
    */
    id: string;
};