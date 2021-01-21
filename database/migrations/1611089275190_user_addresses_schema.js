"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserAddressesSchema extends Schema {
  up() {
    this.create("user_addresses", (table) => {
      table.increments();
      table.string("address_name", 100).notNullable();
      table.text("name");
      table.string("street");
      table.string("postcode");
      table.string("city", 100);
      table.string("country");
      table.integer("user_id");
      table.string("phone");
      table.boolean("is_active").defaultTo(0);
    });
  }

  down() {
    this.drop("user_addresses");
  }
}

module.exports = UserAddressesSchema;
