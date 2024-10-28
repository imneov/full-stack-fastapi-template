export type UserUpdate = {
    email?: (string | null);
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
    password?: (string | null);
};