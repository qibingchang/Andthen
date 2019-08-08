import {getSignList} from '../../service/index';
const moment = require('moment');

const state = {
    active: 1, //表示当前面试类型，0表示全部，1表示未开始，1表示已打卡，2表示已放弃
    list: [] //面试列表
}


const mutations = {
    updateState(state, payload){
        // 判断更多页码
        if (payload.list){
          if (payload.list.length === state.pageSize*state.page){
            state.hasMore = true
          }else{
            state.hasMore = false
          }
        }
        for (let key in payload){
          state[key] = payload[key]
        }
      }
}


const actions = {
    getList({commit, state}, payload){
        console.log('payload...', payload);
        return new Promise(async (resolve, reject)=>{
          let params = {};
          // 修正面试状态
          if (state.active){
            params.status = state.active-2;
          }
          // 拼接面试页码和每页数量
          params.page = state.page;
          params.pageSize = state.pageSize;
          let result = await getSignList(params);
          result.data.forEach(item=>{
            item.address = JSON.parse(item.address);
            item.start_time = formatTime(item.start_time);
          })
          // 判断是替换还是追加
          if (state.page === 1){
            commit('updateState',{list: result.data})
          }else{
            commit('updateState',{list: [...state.list, ...result.data]})
          }
          // 调用resolve通知前端
          resolve();
        })
      }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}