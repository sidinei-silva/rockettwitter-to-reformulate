'use strict'

const User = use('App/Models/User')

class AuthController {
  async register({request}){
    const data = request.only([ "username", "email", "password"]);

    const user = await User.create(data);

    return user;
  }

  async authenticate(){

  }
}

module.exports = AuthController
