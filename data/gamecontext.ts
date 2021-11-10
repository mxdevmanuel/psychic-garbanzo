import { Question } from "@datatypes/question";
import { Country } from "@datatypes/countries";
import { createContext } from "react";

export interface IGameContext {
  current: Question;
  setNext: () => void;
  setGameover: () => void;
  score: number;
  incrementStart: () => void;
  mapDone: number[];
  capitalDone: number[];
  reset: () => void;
}

interface OperationalFields {
  map?: boolean;
  capital?: boolean;
}

export type OpCountry = Country & OperationalFields;

export interface State {
  current: Question;
  countries: OpCountry[];
  score: number;
}

export type Action =
  | { type: "setnext" }
  | { type: "incrementscore" }
  | { type: "gameover" }
  | { type: "reset" };

// TODO(mxdevmanuel): Consider refactoring with immerjs
const reducer = (state: State, action: Action): void => {};
