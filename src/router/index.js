import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ParkDetails from '../views/ParkDetails'
import RecentlyViewed from '../views/RecentlyViewed'
import NationalParks from '../views/NationalParks'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/nationalParks',
        name: 'NationalParks',
        component: NationalParks
    },
    {
        path: '/recentlyViewed',
        name: 'RecentlyViewed',
        component: RecentlyViewed
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