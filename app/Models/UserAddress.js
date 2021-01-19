"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class UserAddress extends Model {
  static get table() {
    return "user_addresses";
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }

  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = UserAddress;
