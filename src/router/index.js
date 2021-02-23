import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import(/* webpackChunkName: "home" */ "../views/Home/index.vue");
const Login = () => import(/* webpackChunkName: "login" */ "../views/Login/index.vue");
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/login",
	},
	{ path: "/login", component: Login },
	{ path: "/home", component: Home },
];

const router = new VueRouter({
	mode: "hash",
	routes,
});
router.beforeEach((to, from, next) => {
	if (to.path === "/login") {
		sessionStorage.clear();
		next();
		return;
	} else if (to.path === "/home") {
		if (sessionStorage.getItem("id")) {
			next();
			return;
		} else {
			next("/login");
			return;
		}
	} else {
		if (sessionStorage.getItem("id")) {
			next("/home");
			return;
		} else {
			next("/login");
			return;
		}
		return;
	}
});
export default router;
