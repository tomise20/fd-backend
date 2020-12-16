"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CartItemsSchema extends Schema {
  up() {
    this.create("cart_items", (table) => {
      table.increments();
      table.integer("cart_id").notNullable();
      table.integer("quantity");
      table.integer("product_id");
      table.timestamps();
    });
  }

  down() {
    this.drop("cart_items");
  }
}

module.exports = CartItemsSchema;
