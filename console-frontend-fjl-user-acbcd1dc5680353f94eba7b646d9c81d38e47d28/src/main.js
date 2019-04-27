import Vue from 'vue'
import App from './App'
import router from './router'
import { Select, Option, Table, TableColumn, Pagination, Form, FormItem, Input, Button,
          Card, Tooltip, Tabs, TabPane, Dialog,} from 'element-ui';


import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Card)
Vue.use(Tooltip)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Dialog)

//改写date内置方法
Date.prototype.toLocaleString = function () {
  return (this.getMonth() + 1) + "-" + this.getDate();
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
