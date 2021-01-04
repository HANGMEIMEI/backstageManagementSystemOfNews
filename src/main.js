/** 项目的启动入口！**/
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载全局样式文件！
import './styles/index.less'
// 关闭生产环境提示!
Vue.config.productionTip = false

// 创建 Vue 根实例
// 把 router 配置到根实例当中！
// 通过render 方法把App根组件渲染到#app入口节点
new Vue({
  router,
  render: h => h(App)
  // // el: '#app' //等价于$mount( '#app')
}).$mount('#app')
