import { Context } from "telegraf";

export interface ISessionData {
  vin: string;
}

export interface IBotContext extends Context {
  session: ISessionData;
}
