'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // this.ctx.body = "api接口"

    let result = await this.app.mysql.get('user',{});
    console.log(result);
    this.ctx.body = result;
  }
}

module.exports = HomeController;
