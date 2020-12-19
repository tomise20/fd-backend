"use strict";

const User = use("App/Models/User");

class UserController {
  async login({ auth, request, response }) {
    const { email, password } = request.all();
    try {
      if (await auth.attempt(email, password)) {
        let user = await User.findBy("email", email);
        let accesToken = await auth.generate(user);
        return response.json({ user: user, access_token: accesToken });
      } else {
        return response
          .status(401)
          .json({ message: "The credentials data is invalid!" });
      }
    } catch (error) {
      return response
        .status(401)
        .send({ message: "The credentials data is invalid!" });
    }
  }
}

module.exports = UserController;
