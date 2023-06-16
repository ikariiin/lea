"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    name;
    company;
    email;
    constructor(id, name, company, email) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.email = email;
    }
    static fromJSON(json) {
        return new User(json.id, json.name, json.company, json.email);
    }
    static toJSON(user) {
        return {
            id: user.id,
            name: user.name,
            company: user.company,
            email: user.email,
        };
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map