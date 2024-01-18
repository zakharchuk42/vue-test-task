import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Login from '../pages/PageLogin.vue';
import Dashboard from '../pages/PageDashboard.vue';
import PageNotFound from '@/pages/PageNotFound.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Login',
		component: Login,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: PageNotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
