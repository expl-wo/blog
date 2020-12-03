'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // this.ctx.body = "api接口"

    // let result = await this.app.mysql.get('type', {});
    // console.log(result);
    // this.ctx.body = result;
    this.ctx.body = 'fn({"type":"string"})'
  }

  async getArticleList() {
    let sql = 'SELECT article.id as id,' +
      'article.title as title ,' +
      // 'article.addTime as addTime ,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime ," +
      'article.view_count as view_count,' +
      'article.introduction as introduction ,' +
      'article.article_content as article_content ,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id'

    const result = await this.app.mysql.query(sql)

    this.ctx.body = { data: result }

  }
}

module.exports = HomeController;
