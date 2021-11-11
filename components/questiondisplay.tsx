import { useContext, useState } from "react";
import { GameContext, IGameContext } from "@data/statemachine";
import { Question, QuestionType } from "@datatypes/question";
import { CircleX, CircleCheck } from "@components/icons";
import clsx from "clsx";

interface QuestionDisplayProps {
  question: Question;
}

const indexes = ["A", "B", "C", "D"];

export default function QuestionDisplay({ question }: QuestionDisplayProps) {
  const ctx: IGameContext = useContext(GameContext);
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-col justify-start items-center py-4 px-3">
      {question.type === QuestionType.FLAG && (
        <div className="w-full my-2">
          <img className="w-1/5" src={question.media.png} />
        </div>
      )}
      <span className="font-bold text-2xl text-gray-700 text-left">
        {question.text}
      </span>
      {question.options.map((option: string, index: number) => (
        <div
          key={option}
          onClick={() => {
            if (selected === null) setSelected(option);
          }}
          className={clsx(
            "w-full rounded-xl border-4 cursor-pointer px-5 py-3 my-2 text-xl text-left relative",
            selected === null &&
              "hover:bg-yellow-400 hover:text-white hover:border-yellow-400",
            (selected === null ||
              (selected !== option && option !== question.answer)) && [
              "bg-white",
              "text-gray-500",
              "border-gray-300",
            ],
            selected &&
              option === question.answer && [
                "bg-green-300",
                "text-green-500",
                "border-green-300",
              ],
            selected === option &&
              option !== question.answer && [
                "bg-red-300",
                "text-red-500 ",
                "border-red-300",
              ]
          )}
        >
          <span className="font-bold mr-5">{indexes[index]}</span> {option}
          {selected && option === question.answer && (
            <CircleCheck className="absolute h-9 w-9 right-5 top-2" />
          )}
          {selected && option === selected && option !== question.answer && (
            <CircleX className="absolute h-9 w-9 right-5 top-2" />
          )}
        </div>
      ))}
      {selected && (
        <div className="self-end">
          <button
            onClick={() => {
              if (selected === question.answer) {
                ctx.dispatch({ type: "incrementscore" });
                ctx.dispatch({ type: "setnext" });
                setSelected(null);
              } else {
                ctx.dispatch({ type: "gameover" });
              }
            }}
            className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
