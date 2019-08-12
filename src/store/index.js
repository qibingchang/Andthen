import Vue from "vue";
import Vuex from "vuex";
// import createLogger from 'vuex/dist/logger';

// 挂载modules
import map from "./modules/map";
import interview from "./modules/interview";
import sign from "./modules/sign";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    map,
    interview,
    user,
    sign
  },
  state: {
    info: {} // 用户信息
  },
  mutations: {
    // 更新全局的state
    updateState(state, payload) {
      state.info = payload;
    }
  }
  // plugins: [createLogger()]
});
