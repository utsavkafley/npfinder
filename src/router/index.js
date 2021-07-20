import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ParkDetails from '../views/ParkDetails'
import History from '../views/History'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/history',
        name: 'History',
        component: History
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