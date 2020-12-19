"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateUsersSchema extends Schema {
  up() {
    this.alter("users", (table) => {
      table.string("name");
    });
  }

  down() {
    this.alter("users", (table) => {
      table.string("name");
    });
  }
}

module.exports = UpdateUsersSchema;
