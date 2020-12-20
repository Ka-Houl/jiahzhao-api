import { IHttpGetParams } from "../../typings";

const nodeFetch = require('node-fetch');

module.exports = {
  // <void> => resolve(....)
  httpGet(options: IHttpGetParams): Promise<void> {
    // get -> data = { a: 1, b: 2 } => base_url + ?a=1&b=2&appKey=....
    const { url, data, success, fail } = options;
    // 从app对象中解构出工具函数集合utils和配置集合config
    const { utils, config } = this.app;
     
    // 使用node-fetch请求数据
    return nodeFetch(config.BASE_URL + url + utils.formatParams(data, config.APP_KEY))
      .then(res => res.json())
      .then(data => success(data))
      .catch(err => fail(err));

  }
}