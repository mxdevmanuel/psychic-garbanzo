import axios, { AxiosInstance } from "axios";

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
    this._initializeRequestInterceptor();
  }

  protected _initializeRequestInterceptor(): void {}
}
