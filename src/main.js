import Vue from 'vue'
import App from './App'
/*import Base from './utils/base'*/


Vue.config.productionTip = false
//将 myUtils 挂载到 vue 的原型上
/*Vue.prototype.Base = Base;*/
App.mpType = 'app'

const app = new Vue(App)

app.$mount()
