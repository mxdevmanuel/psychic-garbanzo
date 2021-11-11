import { Country } from "@datatypes/countries";
import { getOptions } from "@data/countries";
import { Question, QuestionType } from "@datatypes/question";
import template from "lodash/template";
import shuffle from "lodash/shuffle";

const flagText = "Which country does this flag belong to?";
const capitalText = template("<%= capital %> is the capital of");

export const generateQuestion = (countries: Country[]): Question => {
  const selection = Math.round(Math.random() * countries.length);
  const { flags, capital, name } = countries[selection];
  const isCapital = Math.random() > 0.5;
  const options: Country[] = getOptions(countries, 3, selection);
  const answers = options.map((country: Country) => country.name.common);
  answers.push(name.common);

  return {
    type: isCapital ? QuestionType.CAPITAL : QuestionType.FLAG,
    text: isCapital ? capitalText({ capital }) : flagText,
    media: flags,
    answer: name.common,
    options: shuffle(answers),
  };
};
