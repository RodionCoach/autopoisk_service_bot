import { Markup, Telegraf } from "telegraf";
import { Command } from "./commands";
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }
  handle(): void {
    this.bot.start((ctx) => {
      console.log(ctx.session);
      ctx.reply(
        "Здравствуйте! Выберите действие",
        Markup.inlineKeyboard([
          Markup.button.callback("Введите VIN авто", "cars_vin"),
          Markup.button.callback(
            "Поиск детали по названию",
            "parts_searching_by_name"
          ),
          Markup.button.callback(
            "Поиск детали по артикулу",
            "parts_searching_by_name"
          ),
        ])
      );
    });

    this.bot.action("cars_vin", (ctx) => {
      ctx.session.vin = "0";
      ctx.editMessageText("Введите VIN авто (пример: WVGZZZCAZJC520863):");
    });

    this.bot.action("parts_searching_by_name", (ctx) => {
      ctx.editMessageText("Введите название запчасти:");
    });

    this.bot.action("parts_searching_by_name", (ctx) => {
      ctx.editMessageText("Введите номер артикула запчасти:");
    });
  }
}
