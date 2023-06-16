export interface SerializedUser {
  id: string;
  name: string;
  company: string;
  email: string;
}

export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly company: string,
    public readonly email: string,
  ) {}

  static fromJSON(json: SerializedUser): User {
    return new User(
      json.id,
      json.name,
      json.company,
      json.email,
    );
  }

  static toJSON(user: User): SerializedUser {
    return {
      id: user.id,
      name: user.name,
      company: user.company,
      email: user.email,
    };
  }
}
