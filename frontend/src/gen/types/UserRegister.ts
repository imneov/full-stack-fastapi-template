export type UserRegister = {
    /**
     * @type string, email
    */
    email: string;
    /**
     * @type string
    */
    password: string;
    full_name?: (string | null);
};