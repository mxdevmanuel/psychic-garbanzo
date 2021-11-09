import { Fragment, useState, useEffect } from "react";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { Country } from "@datatypes/countries";
import { Question } from "@datatypes/question";
import { CountriesClient, getOptions } from "@data/countries";
import Head from "next/head";

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
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="font-poppins flex flex-col items-center justify-center min-h-screen py-2"
        style={{
          backgroundImage: "url(/images/background.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"></div>
      </main>
    </Fragment>
  );
}
