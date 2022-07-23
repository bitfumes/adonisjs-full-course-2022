import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ view }) => {
  return view.render("welcome");
});

Route.on("/news").render("news.view");

Route.post("/news", ({ response }) => {
  // const { email, password } = request.body();
  return response.redirect("/news");
});

Route.patch("/news/:id", ({ params }) => {
  return { params };
}).where("id", {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
});

Route.delete("/news/:id", ({ params }) => {
  return { params };
}).where("id", {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
});
