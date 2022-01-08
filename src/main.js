import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// THE POINT OF VUES IS THAT YOU DECLEARE AND MUTATE STATE DATA IN ONE PLACE
// AND YOU USE IT ACROSS ALL ENVIRONMENT
// THIS GIVES YOU ORDER, SIMPLISITY AND ALLOWS TO AVOID ERRORS BY ACCIDENTALY MANIMULATING SAME DATA ACROSS DIFFERENT PLACES

const store = createStore({
    // This is the State data you want to use globally in your app accross all modules
    state() {
        return {
            counter: 0
        }
    },
    // MUTATIONS ARE NOT ALLOWED TO RUN ASYNCHRONOUS CODE
    // Do not work directly with state data. To change state data use mutations
    mutations: {
        increment(state) {
            state.counter++;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    // ACTIONS ARE ALLOWED TO RUN ASYNCHRONOUS CODE
    // Actions are very simmilar to mutations, but the difference is that in actions you can use asynchronous code
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
    // Do not render directly state data. If you want to render/show state date on website ue getters for this instead
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
