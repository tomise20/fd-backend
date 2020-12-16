"use strict";

/*
|--------------------------------------------------------------------------
| ShopSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Shop = use("App/Models/Shop");

class ShopSeeder {
  async run() {
    const shop = new Shop();

    shop.name = "Just Burger&Burger";
    shop.shop_image =
      "https://cdn.pixabay.com/photo/2016/02/19/11/40/coffee-shop-1209863_960_720.jpg";
    shop.cover_image =
      "https://cdn.pixabay.com/photo/2015/05/31/11/23/table-791167_960_720.jpg";
    shop.delivery_time = "40-50";
    shop.minimum_order = 0.0;
    shop.contact_info = JSON.stringify({
      address: "6700 Szeged Példa utca 22.",
      phone: "+36 (30) 335-22-66",
      email: "vira.tamas97@gmail.com",
    });
    shop.open_hours = JSON.stringify({
      monday: "7:00am - 10:00pm",
      tuesday: "7:00am - 10:00pm",
      wednesday: "7:00am - 10:00pm",
      thursday: "7:00am - 10:00pm",
      friday: "7:00am - 10:00pm",
      saturday: "closed",
      sunday: "closed",
    });

    await shop.save();
  }
}

module.exports = ShopSeeder;
