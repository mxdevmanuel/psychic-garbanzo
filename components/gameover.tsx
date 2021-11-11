import { useContext } from "react";
import { GameContext, IGameContext } from "@data/statemachine";
import Image from "next/image";

export default function GameOver() {
  const ctx: IGameContext = useContext(GameContext);
  return (
    <div className="flex flex-col justify-start items-center px-3">
      <div>
        <Image
          src="/images/undraw_winners_ao2o 2.svg"
          width="200"
          height="200"
        />
      </div>
      <span className="font-bold text-4xl text-gray-700 text-left">
        Results
      </span>
      <p className="font-bold text-2xl text-gray-700 text-left my-5">
        You got{" "}
        <span className="text-green-300 text-3xl">{ctx.state.score}</span>{" "}
        correct answers.
      </p>
      <div>
        <button
          onClick={() => ctx.dispatch({ type: "reset" })}
          className="mt-8 border-2 rounded-lg border-gray-700 text-gray-700 px-16 py-4 font-semibold"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
