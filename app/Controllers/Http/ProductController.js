"use strict";

const Order = use("App/Models/Order");
const OrderItem = use("App/Models/OrderItem");

class ProductController {
  async storeOrder({ request, response }) {
    const order = new Order();
    order.name = request.input("name");
    order.phone = request.input("phone");
    order.address = request.input("address");
    order.note = request.input("note");
    order.coupon = request.input("coupon");
    order.price = request.input("price");
    order.payment = request.input("payment");
    order.user_id = request.input("user_id");
    await order.save();

    const items = request.input("items");
    await items.forEach(function (item, index) {
      let orderitem = new OrderItem();
      orderitem.name = item.name;
      orderitem.price = item.price;
      orderitem.quantity = item.quantity;
      orderitem.order_id = order.id;
      orderitem.save();
    });

    return response.status(200).json({ message: "successfully order!" });
  }
}

module.exports = ProductController;
