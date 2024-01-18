import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import PageLogin from '../pages/PageLogin.vue';
import PageDashboard from '@/pages/PageDashboard.vue';
import PageNotFound from '@/pages/PageNotFound.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Login',
		component: PageLogin,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: PageDashboard,
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
