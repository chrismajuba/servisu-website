import { GeoLocation } from "./Geolocation";

export class Address {
  geoLocation: GeoLocation;
  houseNumber: string;
  streetName: string;
  suburb: string;
  town: string;
  postalCode: string;

  constructor(
    geoLocation: GeoLocation,
    houseNumber: string,
    streetName: string,
    suburb: string,
    town: string,
    postalCode: string
  ) {
    this.geoLocation = geoLocation;
    this.houseNumber = houseNumber;
    this.streetName = streetName;
    this.suburb = suburb;
    this.town = town;
    this.postalCode = postalCode;
  }
}
