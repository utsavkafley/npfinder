import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'


const store = createStore({
    state() {
        return {
            stateCode: "",
            parks: [],
        }
    },
    mutations: {
        fetchParkByStateCode() {

        }
    }
})


createApp(App).use(store).mount('#app')