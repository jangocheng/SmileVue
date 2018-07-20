import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Row,Col,Swipe,SwipeItem,Lazyload,List,NavBar,Field,Cell, CellGroup} from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(NavBar).use(Field).use(Cell).use(CellGroup);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
