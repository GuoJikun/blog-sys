import { createStore, useStore as baseUseStore } from "vuex";

// 定义 injection key
export const key = Symbol();

export const store = createStore({
    state: {
        isLogin: false,
        token: null,
    },
    mutations: {
        isLogin(state, value) {
            state.isLogin = value;
        },
        token(state, value) {
            state.token = value;
        },
    },
});

export const useStore = () => {
    return baseUseStore(key);
};

export default { useStore, store };
