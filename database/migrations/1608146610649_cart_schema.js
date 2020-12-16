"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CartSchema extends Schema {
  up() {
    this.create("carts", (table) => {
      table.increments();
      table.uuid("session_id").notNullable();
      table.integer("coupon_id");
      table.integer("payment_id");
      table.timestamps();
    });
  }

  down() {
    this.drop("carts");
  }
}

module.exports = CartSchema;
