"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class CartItem extends Model {
  product() {
    return this.hasOne("App/Models/Product");
  }

  cart() {
    return this.hasOne("App/Models/Cart");
  }
}

module.exports = CartItem;
