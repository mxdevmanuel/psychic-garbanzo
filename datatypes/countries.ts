export type NestedDict = Record<string, Record<string, string>>;

export interface PostalCode {
  format: string;
  regex: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Image {
  svg: string;
  png: string;
}

export interface CAR {
  signs: string[];
  side: string;
}

export interface Maps {
  googleMaps?: string;
  openStreetMaps?: string;
}

export interface IDD {
  root: string;
  suffixes: string[];
}

export interface Name {
  common: string;
  official: string;
  nativeName: NestedDict;
}

export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: NestedDict;
  idd: IDD;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: NestedDict;
  translations: NestedDict;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  denonyms: NestedDict;
  flag: string;
  maps: Maps;
  population: number;
  gini: Record<string, number>;
  fifa: string;
  car: CAR;
  timezones: string[];
  continents: string[];
  flags: Image;
  coatOfArms: Image;
  startOfWeek: string;
  postalCode?: PostalCode;
}
