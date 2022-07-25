// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Article from "App/Models/Article";
import CreateArticleValidator from "App/Validators/CreateArticleValidator";

export default class ArticlesController {
  public async index({ view }) {
    const articles = await Article.all();
    return view.render("article/view", { articles });
  }

  public create({ view }) {
    return view.render("article/create");
  }

  public async show({ view, params }) {
    const article = await Article.findBy("slug", params.slug);
    return view.render("article/show", { article });
  }

  public async store({ response, request }) {
    const payload = await request.validate(CreateArticleValidator);
    await Article.create(payload);

    return response.redirect().back();
  }

  public async edit({ view, params }) {
    const article = await await Article.findBy("slug", params.slug);
    return view.render("article/edit", { article });
  }

  public async update({ request, response, params }) {
    const payload = await request.validate(CreateArticleValidator);
    await Article.query().where("slug", params.slug).update(payload);
    return response.redirect().back();
  }

  public async destroy({ params, response }) {
    const article = await Article.findBy("slug", params.slug);
    if (article) {
      article.delete();
      return response.redirect().back();
    }
  }
}
