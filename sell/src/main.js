// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

Vue.use(VueRouter);//注册vue router
Vue.use(VueResource);

/* 定义路由,映射到对应的组件*/
const routes = [
	{
		path:'/goods', component:goods
	},
	{
		path:'/ratings', component:ratings
	},
	{
		path:'/seller', component:seller
	}
];

/*创建router实例，传入routes配置*/
const router = new VueRouter({
	routes
})


/* eslint-disable no-new */
const app = new Vue({
	 el: '#app',
	 router,
	 template: '<App/>',
	 components: { App }
});

