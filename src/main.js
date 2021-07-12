import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

export const store = createStore({
    state() {
        return {
            viewHistory: []
        }
    },

    mutations: {
        addToHistory(state, park) {
            if (!state.viewHistory.includes(park)) state.viewHistory.push(park);
        }
    },

    getter: {
        viewedParks(state) {
            return state.viewHistory
        }
    }
})

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')