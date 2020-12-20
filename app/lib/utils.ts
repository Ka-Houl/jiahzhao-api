function typeOf (value: any): string {
  if (value === null) {
    return 'null';
  }

  return typeof(value) === 'object' ? {
    '[object Object]': 'Object',
    '[object Array]': 'Array'
  }[Object.prototype.toString.call(value)]
  : typeof(value);
}

function formatParams (data: any, appkey?: string): string {
  if (typeOf(data) !== 'Object') {
    throw new Error('Param "data" must be a value of type Object');
  }
  // ?a=1&b=2&appKey=....
  let paramStr: string = '?';

  for (let key in data) {
    paramStr += `${key}=${data[key]}&`;
  }

  return appkey ? paramStr + 'key=' + appkey : paramStr.slice(-1);
}

export default {
  formatParams,
  typeOf
}