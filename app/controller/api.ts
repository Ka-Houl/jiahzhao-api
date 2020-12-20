import { Controller } from 'egg';
import { IHttpPostData } from '../../typings';

export default class ApiController extends Controller {
  public async getQueries() {
    const { ctx } = this;
    
    // 前端向Node端POST数据请求的参数 subject model
    const { subject, model }: IHttpPostData = ctx.request.body;
    // 调用service向聚合数据API发起HTTP请求，结果赋值给ctx.response.body
    ctx.body = await ctx.service.api.getQueries({ subject, model });
  }
}
