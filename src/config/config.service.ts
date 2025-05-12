import { config, DotenvParseOutput } from "dotenv";
import { IConfigService } from "./config.interface";

export class ConfigService implements IConfigService {
  private config: DotenvParseOutput | NodeJS.ProcessEnv;
  constructor() {
    const { error, parsed } = config();

    if (!parsed || Object.keys(parsed).length === 0) {
      this.config = process.env;

      return;
    }

    if (error) {
      console.error("file .env not found", error);
    }

    this.config = parsed;
  }

  get(key: string): string {
    const res = this.config[key];

    if (!res) throw new Error("key does not exist");

    return res;
  }
}
