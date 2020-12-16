"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ShopsSchema extends Schema {
  up() {
    this.create("shops", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.string("cover_image");
      table.string("shop_image");
      table.string("delivery_time");
      table.decimal("minimum_order");
      table.json("contact_info").notNullable();
      table.json("open_hours").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("shops");
  }
}

module.exports = ShopsSchema;
