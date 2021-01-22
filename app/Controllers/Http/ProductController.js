"use strict";

const Order = use("App/Models/Order");
const OrderItem = use("App/Models/OrderItem");

class ProductController {
  async storeOrder({ request, response }) {
    const { user, orderitems, total } = request.all();

    const order = new Order();
    order.name = user.address.name;
    order.phone = user.address.phone;
    order.address = `${user.address.streeet} ${user.address.postcode} ${user.address.city}`;
    order.note = user.note;
    order.coupon = user.promo_code;
    order.price = total;
    order.payment = user.payment_option;
    order.user_id = user.address.user_id;
    await order.save();

    await orderitems.forEach(function (item, index) {
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
