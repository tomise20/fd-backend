"use strict";

const Shop = use("App/Models/Shop");
const Product = use("App/Models/Product");

class PageController {
  async shops({ request, response }) {
    const shops = await Shop.all();
    let result = [];

    for (let i in shops.rows) {
      let temp = shops.rows[i];
      temp.products = await temp.products().fetch();
      result.push(temp);
    }

    return response.header("Access-Control-Allow-Origin", "*").send(result);
  }

  async popularProducts({ request, response }) {
    const products = await Product.query().limit(6).fetch();

    return response.header("Access-Control-Allow-Origin", "*").send(products);
  }
}

module.exports = PageController;
