import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

export const store = createStore({
    state() {
        return {
            viewHistory: [],
            viewHistoryIdList: []
        }
    },

    mutations: {
        addToHistory(state, park) {
            if (state.viewHistoryIdList.includes(park.id)) {
                let index = state.viewHistoryIdList.indexOf(park.id)
                state.viewHistoryIdList.splice(index, 1)
                state.viewHistory.splice(index, 1)
            }
            state.viewHistoryIdList.push(park.id)
            state.viewHistory.push(park)
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