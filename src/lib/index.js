
// 轮播图 组件
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// require styles
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default global options } */)


// axios  组件 
import ajax from '../util/axios' 

Vue.prototype.$http = ajax;


//jsonp 
import jsonp from 'jsonp'

Vue.prototype.$jsonp = jsonp;

//另一个 JSONP .
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

//过滤器
import '../util/filter'

//scroll
import scroll from '../util/scroll';
Vue.prototype.$scroll = scroll;

//bus
import bus from '../util/bus'
Vue.prototype.$bus = bus