
export interface CheckResponseStructure {
    status : boolean;
    username ?: string;
}

export class CheckResponse {
    static UNAUTHORIZED() : CheckResponseStructure {
        return {
            status: false
        };
    }
    static AUTHORIZED_USER(userName : string) : CheckResponseStructure {
        return {
            status : true,
            username : userName
        }
    }
}
