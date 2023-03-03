import {createStore} from "vuex";

const store = createStore({
    state: {
        count: 0
    },
    getters: {
      doubleCount: (state) => state.count * 2
    },
    actions: {
        increment: ({commit}) => commit('increment'),
        decrement: ({commit}) => commit('decrement'),
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
           // state.count--;
            if (state.count > 0) {
                state.count--;
            }

        }
    }
});
export default store;