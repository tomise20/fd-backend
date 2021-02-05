"use strict";

const { get } = require("@adonisjs/framework/src/Route/Manager");

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
Route.post("/register", "UserController.register");

Route.group(() => {
  Route.get("/get-user", "UserController.getUser");
  Route.get("/refresh-orders", "UserController.refreshOrders");
  Route.post("/logout", "UserController.logout");
  Route.post("/store-address", "UserController.storeAddress");
  Route.post("/set-active-address", "UserController.setActiveAddress");
  Route.delete("/:id/delete-address", "UserController.deleteAddress");
})
  .middleware(["auth"])
  .prefix("user");

Route.group(() => {
  Route.post("/store", "ProductController.storeOrder");
}).prefix("/order");

Route.group(() => {
  Route.get("/", "PageController.shops");
  Route.get("/popular-products", "PageController.popularProducts");
  Route.get("/:id/products", "ProductController.getShopWithProducts");
}).prefix("shops");
