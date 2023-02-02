export interface Geolocation {
  latitude: number;
  longitude: number;
}

export interface NominatimResponse {
  address: {
    town: string;
    country: string;
    country_code: string;
    county: string;
    house_number: string;
    pedestrian: string;
    postcode: string;
    road: string;
    state: string;
    suburb: string;
  };
  boundingbox: [string, string, string, string];
  display_name: string;
  lat: string;
  licence: string;
  lon: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  type: string;
}

export function reverseGeocode(
  geolocation: Geolocation,
): Promise<NominatimResponse> {
  return fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${geolocation.latitude}&lon=${geolocation.longitude}`,
  ).then((response) => response.json());
}
