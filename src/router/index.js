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
        path: '/nationalParks/:stateCode',
        name: 'NationalParks',
        component: NationalParks
    },
    {
        path: '/recentlyViewed',
        name: 'RecentlyViewed',
        component: RecentlyViewed
    },
    {
        path: '/:parkCode',
        name: 'ParkDetails',
        component: ParkDetails,
        props: (route) => ({ fullName: route.query.fullName, description: route.query.description, imgUrls: route.query.imgUrls })

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router