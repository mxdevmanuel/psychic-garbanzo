import HttpClient from "@data/client";
import { Country } from "@datatypes/countries";
import { AxiosResponse } from "axios";
import isNil from "lodash/isNil";

export class CountriesClient extends HttpClient {
  public constructor() {
    super("https://restcountries.com/v3.1");
  }

  public async getCountries(): Promise<Country[]> {
    const res: AxiosResponse = await this.instance.get("/all");
    const countries: Country[] = res.data
      .filter(({ capital, flags }) => !(isNil(capital) || isNil(flags)))
      .map(({ name, capital, flags }) => ({
        name,
        capital,
        flags,
      }));
    return countries;
  }
}

export function getOptions(
  countries: Country[],
  amount = 3,
  avoid?: number
): Country[] {
  const options: Country[] = [];
  for (let index = 0; index < amount; index++) {
    let r0 = Math.floor(Math.random() * (countries.length - 1));
    if (!isNil(avoid) && r0 === avoid) {
      index--;
      continue;
    }
    options.push(countries[index]);
  }
  return options;
}
