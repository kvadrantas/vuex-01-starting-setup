import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// THE POINT OF VUES IS THAT YOU DECLEARE AND MUTATE STATE DATA IN ONE PLACE
// AND YOU USE IT ACROSS ALL ENVIRONMENT
// THIS GIVES YOU ORDER, SIMPLISITY AND ALLOWS TO AVOID ERRORS BY ACCIDENTALY MANIMULATING SAME DATA ACROSS DIFFERENT PLACES
// VUEX main components: 
    // state - declare state data
    // mutations - manimpulate/change/process state data
    // actions - same as mutations, but you can use asynchonus code
    // getters - use getters to render state data instead of renderint directly state data


    
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
    // Best practice is to use actions in your app instead of mutations all the time and mutations to use in the acitions
    // to avoid issues with asynch code execution
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
