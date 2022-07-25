import Route from "@ioc:Adonis/Core/Route";

Route.on("/").render("welcome");
Route.resource("news", "ArticlesController").paramFor("news", "slug");
