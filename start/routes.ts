import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ view }) => {
  return view.render("welcome");
});

Route.get("/news", "ArticlesController.view").as("news_view");

Route.post("/news", ({ response }) => {
  // const { email, password } = request.body();
  return response.redirect("/news");
}).as("news.create");

Route.patch("/news/:id", ({ params }) => {
  return { params };
})
  .where("id", {
    match: /^[0-9]+$/,
    cast: (id) => Number(id),
  })
  .as("news_update");

Route.delete("/news/:id", ({ params }) => {
  return { params };
})
  .where("id", {
    match: /^[0-9]+$/,
    cast: (id) => Number(id),
  })
  .as("news.delete");
