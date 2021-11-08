export type NestedDict = Record<string, Record<string, string>>;

export interface Image {
  svg: string;
  png: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NestedDict;
}

export interface Country {
  name: Name;
  capital: string[];
  flags: Image;
}
