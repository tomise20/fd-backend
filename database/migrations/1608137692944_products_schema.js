"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductsSchema extends Schema {
  up() {
    this.create("products", (table) => {
      table.increments();
      table.string("name", 100).notNullable();
      table.text("description");
      table.string("cal", 50);
      table.string("image", 191);
      table.string("type", 100);
      table.string("preparation_time");
      table.decimal("price").notNullable();
      table.integer("shop_id");
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductsSchema;
