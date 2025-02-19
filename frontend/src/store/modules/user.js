import { userService } from "@/services/userService";

export default {
  strict: true,
  state: {
    user: null,
  },

  mutations: {
    setUser(state, { user }) {
      state.user = user;
    },
  },

  actions: {
    async checkAuth({ commit }) {
      try {
        const user = await userService.checkAuth();
        // console.log("user auth", user);
        commit({ type: "setUser", user });
      } catch (err) {
        console.log("no user auth - need to resign", err);
      }
    },

    async login({ commit }) {
      try {
        const user = await userService.login();
        // console.log("user", user);
        commit({ type: "setUser", user });
      } catch (err) {
        console.log("error login", err);
      }
    },
  },

  getters: {
    user: (state) => state.user,
  },
};
