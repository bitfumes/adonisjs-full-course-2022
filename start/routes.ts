import Route from "@ioc:Adonis/Core/Route";

Route.on("/").render("welcome");

Route.group(() => {
  Route.resource("news", "ArticlesController").paramFor("news", "slug");
}).middleware("auth");

Route.on("/login").render("auth.login").as("auth.login");

Route.post("/login", async ({ auth, request, response }) => {
  const email = request.input("email");
  const password = request.input("password");

  await auth.use("web").attempt(email, password);
  return response.redirect("/");
});
