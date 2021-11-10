import { Question } from "@datatypes/question";
import { Country } from "@datatypes/countries";
import { generateQuestion } from "@data/questions";
import { createContext, Dispatch } from "react";
import { Draft } from "immer";

export interface State {
  readonly current: Question;
  readonly countries: Country[];
  readonly score: number;
  readonly gameover: boolean;
}

export type Action =
  | { type: "setnext" }
  | { type: "incrementscore" }
  | { type: "gameover" }
  | { type: "reset" };

export interface IGameContext {
  dispatch: Dispatch<Action>;
}

export const GameContext = createContext<IGameContext>({
  dispatch: () => {
    console.log("default");
  },
});

// TODO(mxdevmanuel): Consider refactoring with immerjs
export const reducer = (state: Draft<State>, action: Action): void => {
  switch (action.type) {
    case "reset":
      state.score = 0;
      break;
    case "setnext":
      state.current = generateQuestion(state.countries);
      break;
    case "incrementscore":
      state.score++;
      break;
    case "gameover":
      state.gameover = true;
      break;
  }
};
