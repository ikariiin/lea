import { SerializedUser, User } from "./user";
export interface SerializedListing {
    id: string;
    title: string;
    wage: number;
    position: string;
    description: string;
    poster: SerializedUser;
}
export declare class Listing {
    readonly id: string;
    readonly title: string;
    readonly wage: number;
    readonly position: string;
    readonly description: string;
    readonly poster: User;
    constructor(id: string, title: string, wage: number, position: string, description: string, poster: User);
    static fromJSON(json: SerializedListing): Listing;
    static toJSON(listing: Listing): SerializedListing;
}
