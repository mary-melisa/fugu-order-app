import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import Long from 'long';
import './plugins/fastclick';
import './plugins/flexible';
import * as filters from './filters';
import Vant from 'vant';
import 'vant/lib/index.css';
import loading from '@/components/loading/loading.js';
import BaiduMap from 'vue-baidu-map';
import { Lazyload } from 'vant';
// 处理路由报错
import Router from 'vue-router';
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Lazyload);
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'Dw09ZpZG9VGhwlzHjwMp5ogOuEx9uAFO'
});
Vue.use(Vant);
Vue.use(loading)
window.Long = Long;
Vue.prototype.$http = axios;
import "@assets/iconfont/iconfont.css";
//api即vue.config.js中配置的地址
//axios.defaults.baseURL='/api/'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

