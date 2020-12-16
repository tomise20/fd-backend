"use strict";

const Shop = use("App/Models/Shop");
const Product = use("App/Models/Product");

class PageController {
  async index({ request, response }) {
    const shops = await Shop.all();
    const products = await Product.all();

    const data = {
      shops: shops,
      products: products,
    };

    return response.header("Access-Control-Allow-Origin", "*").send(data);
  }
}

module.exports = PageController;
