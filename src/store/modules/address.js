import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js';

// 实例化一下
const qqMapSdk = new QQMapWX({
  key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
});

const state = {
    addresssList:[],//搜索地址
    selectList:'' //回传地址
}

const actions = {
  getSuggestion({commit}, payload){
    qqMapSdk.getSuggestion({
      keyword: payload,
      success: res=>{
        commit("search",res.data)
        // console.log('res...', res.data);s
      }
    })
  }
}

const mutations = {
    search(state,payload){
        console.log(payload.data)
        state.addresssList=payload;
    },
    selectList(state,payload){
        state.selectList=payload;
        wx.navigateTo({
          url: "/pages/add/main"
        });
    }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
