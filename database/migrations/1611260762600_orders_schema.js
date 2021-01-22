"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrdersSchema extends Schema {
  up() {
    this.create("orders", (table) => {
      table.increments();
      table.string("name");
      table.string("phone");
      table.string("address");
      table.string("note").nullable();
      table.string("coupon").nullable();
      table.decimal("price");
      table.string("payment");
      table.integer("user_id").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("orders");
  }
}

module.exports = OrdersSchema;
