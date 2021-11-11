import { Fragment, useReducer } from "react";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { Country } from "@datatypes/countries";
import { generateQuestion } from "@data/questions";
import { reducer, GameContext } from "@data/statemachine";
import QuestionDisplay from "@components/questiondisplay";
import GameOver from "@components/gameover";
import { CountriesClient } from "@data/countries";
import { produce } from "immer";
import Head from "next/head";
import Image from "next/image";

interface HomeProps {
  countries: Country[];
}

export const getStaticProps: GetStaticProps = async (
  _context: GetStaticPropsContext
): Promise<GetStaticPropsResult<HomeProps>> => {
  const client = new CountriesClient();
  return { props: { countries: await client.getCountries() } };
};

export default function Home({ countries }: HomeProps) {
  const [state, dispatch] = useReducer(produce(reducer), {
    current: generateQuestion(countries),
    countries,
    score: 0,
    gameover: false,
  });
  const display = state.gameover ? (
    <GameOver />
  ) : (
    <QuestionDisplay question={state.current} />
  );
  return (
    <Fragment>
      <Head>
        <title>Country Quiz</title>
        <link rel="icon" href="/images/undraw_adventure_4hum 1.svg" />
      </Head>
      <GameContext.Provider value={{ dispatch, state }}>
        <main
          className="font-poppins flex flex-col items-center justify-center min-h-screen py-2"
          style={{
            backgroundImage: "url(/images/background.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full flex-1 px-5 lg:px-20 text-center">
            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 relative">
              <h1 className="text-xl lg:text-3xl font-bold text-white text-left">
                COUNTRY QUIZ
              </h1>
              {!state.gameover && (
                <div className="absolute -top-10 right-3 w-32 h-32">
                  <Image
                    src="/images/undraw_adventure_4hum 1.svg"
                    layout="fill"
                  />
                </div>
              )}
              <div className="bg-white rounded-lg py-8 px-4 w-full">
                {display}
              </div>
            </div>
          </div>
          <div>
            <span className="justify-self-start text-white">
              created by{" "}
              <a href="https://github.com/mxdevmanuel" className="font-bold">
                mxdevmanuel
              </a>{" "}
              - devChallenges.io{" "}
            </span>
          </div>
        </main>
      </GameContext.Provider>
    </Fragment>
  );
}
