import HttpClient from "@data/client";
import { Country } from "@datatypes/countries";
import { AxiosResponse } from "axios";

export class CountriesClient extends HttpClient {
  public constructor() {
    super("https://restcountries.com/v3.1");
  }

  public async getCountries(): Promise<Country[]> {
    const res: AxiosResponse = await this.instance.get("/all");
    return res.data;
  }
}
