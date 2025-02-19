import { googleCalendarService } from "@/services/googleCalendarService";

export default {
  strict: true,
  state: {
    events: [],
  },

  mutations: {
    setEvents(state, { events }) {
      state.events = events;
    },
  },

  actions: {
    
    async loadEvents({ commit }, { filterBy = {} }) {
      const events = await googleCalendarService.getEvents();
      commit({ type: "setEvents", events });
    },

  },

  getters: {
    events: (state) => state.events,
  },
};
