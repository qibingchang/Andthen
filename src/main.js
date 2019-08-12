import Vue from "vue";
import App from "./App";
import store from "@/store";
console.log(store)
// 引入QQMap
import QQMapWx from '../static/libs/qqmap-wx-jssdk.js'
Vue.config.productionTip = false;
App.mpType = "app";
//将store挂载到vue原型上 作为共享钥匙
Vue.prototype.$store = store;

//将QQMapWX挂载到vue原型上 作为共享地图
var $map = new QQMapWx({
  key: 'X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL'
})
Vue.prototype.$map = $map;

const app = new Vue(App);
app.$mount();
