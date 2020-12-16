"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Product extends Model {
  shop() {
    return this.belongsTo("App/Models/Shop");
  }
}

module.exports = Product;
