"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
const User = use("App/Models/User");
const Database = use("Database");

Route.get("/", () => {
  return "FD Backend from Adonis.js";
});

Route.get("/home", "PageController.index");
Route.post("/login", "UserController.login").middleware("guest");

Route.group(() => {
  Route.post("/logout", "UserController.logout");
  Route.post("/store-address", "UserController.storeAddress");
}).middleware(["auth"]);

Route.get("/register", async () => {
  const count = User.all();

  if (!count) {
    const user = new User();
    user.username = "admin";
    user.password = "admin";
    user.email = "admin@admin.com";
    await user.save();
    return "Successfully created admin user.";
  } else {
    return "The admin user is already exists.";
  }
});
