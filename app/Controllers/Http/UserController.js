"use strict";

const User = use("App/Models/User");
const UserAddress = use("App/Models/UserAddress");

class UserController {
  async login({ auth, request, response }) {
    const { email, password } = request.all();
    try {
      if (await auth.attempt(email, password)) {
        let user = await User.query()
          .with("addresses")
          .where("email", email)
          .first();
        let accesToken = await auth.generate(user);
        return response.json({ user: user, access_token: accesToken });
      } else {
        return response
          .status(401)
          .json({ message: "The credentials data is invalid!" });
      }
    } catch (error) {
      return response.status(401).send({ message: error.message });
    }
  }

  async getUser({ auth, request, response }) {
    try {
      const user = await auth.getUser();
      return User.query().with("addresses").where("id", user.id).first();
    } catch (error) {
      response.send("You are not logged in");
    }
  }

  async storeAddress({ request, response }) {
    const user_id = request.input("user_id");
    const user = await User.query()
      .with("addresses")
      .where("id", user_id)
      .first();
    const addresses_count = await user.addresses().count();
    const count = await addresses_count[0]["count(*)"];
    const is_active = count == 0 ? 1 : request.input("is_active");

    try {
      let address = new UserAddress();
      address.address_name = request.input("address_name");
      address.name = request.input("name");
      address.street = request.input("street");
      address.city = request.input("city");
      address.postcode = request.input("postcode");
      address.country = request.input("country");
      address.user_id = request.input("user_id");
      address.phone = request.input("phone");
      address.is_active = is_active;
      await address.save();

      return response.status(200).json({ address });
    } catch (error) {
      return response.status(500).send({ message: error.message });
    }
  }

  async setActiveAddress({ request, response }) {
    const user_id = request.input("user_id");
    const address_id = request.input("address_id");
    const user = await User.find(user_id);
    await user.addresses().where("id", address_id).update({ is_active: 1 });
    await user
      .addresses()
      .where("id", "<>", address_id)
      .update({ is_active: 0 });

    const addresses = await user.addresses().fetch();

    return response.status(200).json({ addresses });
  }

  async deleteAddress({ params, request, response }) {
    const address_id = params.id;
    await UserAddress.query().where("id", address_id).delete();

    return response.status(200).json({ message: "OK" });
  }
}

module.exports = UserController;
