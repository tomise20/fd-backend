"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateShopsSchema extends Schema {
  up() {
    this.alter("shops", (table) => {
      table.integer("raitings");
      table.string("description");
      table.string("type");
    });
  }

  down() {
    this.alter("shops", (table) => {
      table.integer("raitings");
      table.string("description");
      table.string("type");
    });
  }
}

module.exports = UpdateShopsSchema;
