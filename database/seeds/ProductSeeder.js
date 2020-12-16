"use strict";

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Product = use("App/Models/Product");

class ProductSeeder {
  async run() {
    const product = new Product();
    (product.name = "Dupla burger with fanta"),
      (product.description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"),
      (product.cal = "500-800"),
      (product.image =
        "https://cdn.pixabay.com/photo/2020/10/22/11/36/hamburger-5675844_960_720.jpg"),
      (product.type = "American, Fast food"),
      (product.preparation_time = "30-40"),
      (product.price = 6.2),
      (product.shop_id = 1);

    await product.save();

    const product2 = new Product();
    (product2.name = "Dupla burger with chips and drink"),
      (product2.description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"),
      (product2.cal = "400-600"),
      (product2.image =
        "https://cdn.pixabay.com/photo/2020/10/22/11/36/hamburger-5675844_960_720.jpg"),
      (product2.type = "American, Fast food"),
      (product2.preparation_time = "25-30"),
      (product2.price = 9.75),
      (product2.shop_id = 1);

    await product2.save();

    const product3 = new Product();
    (product3.name = "Dupla burger with fanta"),
      (product3.description = "Cheseburger with cola"),
      (product3.cal = "550-800"),
      (product3.image =
        "https://cdn.pixabay.com/photo/2018/11/11/10/05/cheeseburger-3808424_960_720.jpg"),
      (product3.type = "American, Fast food"),
      (product3.preparation_time = "25-30"),
      (product3.price = 11.55),
      (product3.shop_id = 1);

    await product3.save();
  }
}

module.exports = ProductSeeder;
