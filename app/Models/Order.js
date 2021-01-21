"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Order extends Model {
  orderitems() {
    return this.hasMany("App/Models/OrderItem");
  }

  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Order;
