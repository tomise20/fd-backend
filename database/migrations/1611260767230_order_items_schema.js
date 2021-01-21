"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrderItemsSchema extends Schema {
  up() {
    this.create("order_items", (table) => {
      table.increments();
      table.string("name");
      table.decimal("price");
      table.integer("quantity");
      table.integer("order_id");
    });
  }

  down() {
    this.drop("order_items");
  }
}

module.exports = OrderItemsSchema;
