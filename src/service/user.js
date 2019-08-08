import fly from '../utils/request';

// 登陆接口
export let login = code=>{
  return fly.post('/user/code2session', {code});
}

// 添加面试
export let addSign = params=>{
  return fly.post('/sign', code);
}

// 面试列表
export let getSignList = params=>{
  return fly.get('/sign', params);
}

