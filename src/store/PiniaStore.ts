import {defineStore} from "pinia";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        count: 0, //estado
    }),
    getters: { // transformacion del estado
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
            // if (this.count > 0) {
            //     this.count--
            // }
        }
    },
    persist: true,
})