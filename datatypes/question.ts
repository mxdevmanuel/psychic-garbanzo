import { Image } from "@datatypes/countries";

export interface Question {
  text: string;
  media?: Image;
  options: string[];
}
