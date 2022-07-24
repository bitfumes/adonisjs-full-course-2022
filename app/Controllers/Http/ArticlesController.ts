// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";

export default class ArticlesController {
  public async view({ view }) {
    const articles = await Database.from("articles").select("*");
    return view.render("article/view", { articles });
  }

  public create({ view }) {
    return view.render("article/create");
  }

  public async store({ response, request }) {
    const { title, content, image } = request.body();
    await Database.table("articles").insert({
      title,
      content,
      image,
      slug: "asdf1",
    });
    return response.redirect().back();
  }
}
