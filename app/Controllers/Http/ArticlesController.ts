// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";
import CreateArticleValidator from "App/Validators/CreateArticleValidator";

export default class ArticlesController {
  public async view({ view }) {
    const articles = await Database.from("articles").select("*");
    return view.render("article/view", { articles });
  }

  public create({ view }) {
    return view.render("article/create");
  }

  public async store({ response, request }) {
    const payload = await request.validate(CreateArticleValidator);
    await Database.table("articles").insert({
      ...payload,
      slug: payload.title,
    });

    return response.redirect().back();
  }
}
