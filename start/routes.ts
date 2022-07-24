import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ view }) => {
  return view.render("welcome");
});

Route.get("/news", "ArticlesController.view").as("news_view");
Route.get("/news/create", "ArticlesController.create").as("news_create");
Route.post("/news", "ArticlesController.store").as("news_store");
Route.get("/news/:slug/edit", "ArticlesController.edit").as("news_edit");
Route.patch("/news/:slug", "ArticlesController.update").as("news_update");

Route.delete("/news/:id", ({ params }) => {
  return { params };
})
  .where("id", {
    match: /^[0-9]+$/,
    cast: (id) => Number(id),
  })
  .as("news.delete");
