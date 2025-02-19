<template>
  <h3>{{ event.summary }}</h3>
  <p>Date: {{ eventDate }}</p>
  <p>Time: {{ eventTime }}</p>
</template>

<script>
export default {
  props: ["event"],
  computed: {
    eventDate() {
      const startDate = this.event.start.dateTime.slice(0, 10);

      const endDate = this.event.end.dateTime.slice(0, 10);
      const date =
        startDate === endDate ? startDate : `${startDate} - ${endDate}`;
      return date;
    },
    eventTime() {
      const startTime = this.event.start.dateTime.slice(11, 16);
      const endTime = this.event.end.dateTime.slice(11, 16);
      const time = `${startTime} - ${endTime}`;
      return time;
    },
  },
};
</script>

<style></style>
