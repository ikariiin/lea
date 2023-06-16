import { SerializedUser, User } from "./user";

export interface SerializedListing {
  id: string;
  title: string;
  wage: number;
  position: string;
  description: string;
  poster: SerializedUser;
}

export class Listing {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly wage: number,
    public readonly position: string,
    public readonly description: string,
    public readonly poster: User,
  ) {}

  static fromJSON(json: SerializedListing): Listing {
    const deserializedPoster = User.fromJSON(json.poster);
    return new Listing(
      json.id,
      json.title,
      json.wage,
      json.position,
      json.description,
      deserializedPoster,
    );
  }

  static toJSON(listing: Listing): SerializedListing {
    const serializedPoster = User.toJSON(listing.poster);

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