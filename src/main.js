import Vue from 'vue'
import App from './App'
import './fonts/iconfont.css'
import store from './store'

Vue.config.productionTip = false
App.mpType = 'app'

// 挂载store
Vue.prototype.$store = store;

const app = new Vue(App)
app.$mount()
