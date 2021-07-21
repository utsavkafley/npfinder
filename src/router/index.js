import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ParkDetails from '../views/ParkDetails'
import RecentlyViewed from '../views/recentlyViewed'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/recentlyViewed',
        name: 'recentlyViewed',
        component: recentlyViewed
    },
    {
        path: '/:parkCode/:parkName/:parkDesc',
        name: 'ParkDetails',
        component: ParkDetails,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router