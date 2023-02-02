import RecentListings from "../sample-data/recent-listing.json";
import Listings from "../sample-data/listing.json";

export interface Listing {
  id: string;
  title: string;
  description: string;
  hourlyRate: number;
  details: string;
  city: string;
  jobType: string;
  experience: string;
  education: string;
}

export async function getRecentListings(): Promise<Listing[]> {
  return RecentListings;
}

export async function getListings(): Promise<Listing[]> {
  return Listings;
}
