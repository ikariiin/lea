"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listing = void 0;
const user_1 = require("./user");
class Listing {
    id;
    title;
    wage;
    position;
    description;
    poster;
    constructor(id, title, wage, position, description, poster) {
        this.id = id;
        this.title = title;
        this.wage = wage;
        this.position = position;
        this.description = description;
        this.poster = poster;
    }
    static fromJSON(json) {
        const deserializedPoster = user_1.User.fromJSON(json.poster);
        return new Listing(json.id, json.title, json.wage, json.position, json.description, deserializedPoster);
    }
    static toJSON(listing) {
        const serializedPoster = user_1.User.toJSON(listing.poster);
        return {
            id: listing.id,
            title: listing.title,
            wage: listing.wage,
            position: listing.position,
            description: listing.description,
            poster: serializedPoster,
        };
    }
}
exports.Listing = Listing;
//# sourceMappingURL=listing.js.map