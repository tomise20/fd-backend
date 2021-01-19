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

  async storeAddress({ request, response }) {
    console.log(request.input("address_name"));
    try {
      let address = new UserAddress();
      address.address_name = request.input("address_name");
      address.name = request.input("name");
      address.street = request.input("street");
      address.city = request.input("city");
      address.postcode = request.input("postcode");
      address.country = request.input("country");
      address.user_id = request.input("user_id");
      await address.save();

      return response.status(200).json({ address });
    } catch (error) {
      return response.status(500).send({ message: error.message });
    }
  }
}

module.exports = UserController;
