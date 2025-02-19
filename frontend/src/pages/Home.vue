<template>
  <div>
    <EventList class="event-list" v-if="events" :events="events"></EventList>
    <a
      class="whatsapp-link"
      target="_blank"
      :href="`https://api.whatsapp.com/send?text=${msgToSend}`"
      data-action="share/whatsapp/share"
      >Share via Whatsapp</a
    >
  </div>
</template>

<script>
import EventList from "@/cmps/EventList.vue";

export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch({ type: "loadEvents" });
  },
  methods: {},
  computed: {
    events() {
      return this.$store.getters.events;
    },
    msgToSend() {
      const eventsList = this.events.reduce((list, ev, idx) => {
        const startTime = ev.start.dateTime.slice(11, 16);
        const endTime = ev.end.dateTime.slice(11, 16);
        const time = `${startTime} - ${endTime}`;
        return list + `${idx + 1}. ${ev.summary}, at ${time}\n`;
      }, "");
      return encodeURIComponent(`Your events for today:\n${eventsList}`);
    },
  },
  components: {
    EventList,
  },
};
</script>

<style>
.event-list {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.whatsapp-link {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: #25d366;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
