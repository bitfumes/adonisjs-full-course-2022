// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";

export default class ArticlesController {
  public async view({ view }) {
    const articles = await Database.from("articles").select("*");
    return view.render("news.view", { articles });
  }
}
