import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/starships",
		name: "Starships",

		component: () => import("../views/Starships.vue"),
	},
	{
		path: "/pilots",
		name: "Pilots",

		component: () => import("../views/Pilots.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
