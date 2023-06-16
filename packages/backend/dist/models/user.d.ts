export interface SerializedUser {
    id: string;
    name: string;
    company: string;
    email: string;
}
export declare class User {
    readonly id: string;
    readonly name: string;
    readonly company: string;
    readonly email: string;
    constructor(id: string, name: string, company: string, email: string);
    static fromJSON(json: SerializedUser): User;
    static toJSON(user: User): SerializedUser;
}
