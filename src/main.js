import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    // MUTATIONS ARE NOT ALLOWED TO RUN ASYNCHRONOUS CODE
    mutations: {
        increment(state) {
            state.counter++;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    // ACTIONS ARE ALLOWED TO RUN ASYNCHRONOUS CODE
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 2000);
        },
        increase(context, payload) {
            setTimeout(() => {
                context.commit('increase', payload);
            }, 2000);
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter
        },
        tenTimes(state, getters) {
            return getters.finalCounter * 10;
        }
    }
})

const app = createApp(App);

app.use(store);

app.mount('#app');
