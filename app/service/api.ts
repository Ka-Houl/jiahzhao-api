import { Service } from 'egg';
import { 
  IHttpGetParams, 
  IHttpPostData, 
  IQueryData, 
  MODELS, 
  SUBJECTS, 
  TEST_TYPES 
} from '../../typings';

/**
 * Test Service
 */
export default class Api extends Service {
  public async getQueries({ subject, model }: IHttpPostData): Promise<IQueryData[]> {
    const { ctx } = this;

    // 对参数进行有效判断
    const _subject: SUBJECTS = subject || SUBJECTS.s1;
    const _model: MODELS = model || MODELS.c1;
    const _testType: TEST_TYPES = TEST_TYPES.rand;
    
    // 向聚合数据API发起HTTP请求，GET请求，用对象的方式传递参数
    return ctx.httpGet(<IHttpGetParams>{
      url: '/query',
      data: <IHttpPostData>{
        subject: _subject,
        model: _model,
        testType: _testType
      },
      success (data) {
        return data;
      },
      fail (err) {
        throw new Error('Request failed' + err);
      }
    })
  }


}
