"use strict";

const Order = use("App/Models/Order");
const OrderItem = use("App/Models/OrderItem");
const Shop = use("App/Models/Shop");

class ProductController {
  async getShopWithProducts({ params, request, response }) {
    const shopId = params.id;

    const shop = await Shop.query()
      .with("products")
      .where("id", shopId)
      .first();

    console.log(shop);

    return response.status(200).json(shop);
  }

  async storeOrder({ request, response }) {
    const { user, orderitems, total } = request.all();

    const order = new Order();
    order.name = user.address.name;
    order.phone = user.address.phone;
    order.address = `${user.address.street} ${user.address.postcode} ${user.address.city}`;
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

    return response.status(200).json(order);
  }
}

module.exports = ProductController;
