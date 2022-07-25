import Route from "@ioc:Adonis/Core/Route";

Route.on("/").render("welcome");

Route.resource("news", "ArticlesController")
  .paramFor("news", "slug")
  .middleware({
    edit: ["auth"],
    create: ["auth"],
    store: ["auth"],
    destroy: ["auth"],
  });

Route.on("/login").render("auth.login").as("auth.login");

Route.post("/login", async ({ auth, request, response }) => {
  const email = request.input("email");
  const password = request.input("password");

  await auth.use("web").attempt(email, password);
  return response.redirect("/");
});

Route.post("/logout", async ({ auth, response }) => {
  await auth.use("web").logout();
  response.redirect("/login");
}).as("auth.logout");
