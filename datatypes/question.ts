import { Image } from "@datatypes/countries";

export interface Question {
  text: string;
  media?: Image;
  answer: string;
  options: string[];
}
