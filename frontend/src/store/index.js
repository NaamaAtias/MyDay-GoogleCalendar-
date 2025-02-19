import { createStore } from "vuex";
import event from "./modules/event";
import user from "./modules/user";

const storeOptions = {
  strict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    },
      modules: {
        event,
        user,
    }
};

const store = createStore(storeOptions);

export default store;
