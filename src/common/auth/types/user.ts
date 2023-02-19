import Role from "@common/auth/types/role";



export interface User{
    _id: string;
    username?: string;
    first_name?: any;
    last_name?: any;
    avatar_url?: any;
    about?: string;
    gender?: string;
    email?: string; //!


    created_at?: Date; //!
    updated_at?: Date; //!
    background?: string;

    avatar?: string;
    available_space?: any //!;
    email_verified_at?: Date //!;
    display_name?: string;
    has_password?: boolean //!;
    roles?: Role[];

}
