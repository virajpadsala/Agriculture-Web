import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/Pages/NotFoundPage.vue';

const routes = [
  {
    path: '',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Dashboard.vue')
      },
      {
        path: '/farmers',
        name: 'farmers',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Farmers.vue')
      },
      {
        path: '/add-farmer',
        name: 'Add Farmer',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/FarmerForm.vue')
      },
      {
        path: '/add-farm',
        name: 'Add Farm',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/FarmForm.vue')
      },
      {
        path: '/farmers/:id',
        name: 'Farmer Detail',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/FarmerDetail.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
