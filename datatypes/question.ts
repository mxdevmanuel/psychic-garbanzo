import { Image } from "@datatypes/countries";

export enum QuestionType {
  CAPITAL,
  FLAG,
}

export interface Question {
  type: QuestionType;
  text: string;
  media?: Image;
  answer: string;
  options: string[];
}
