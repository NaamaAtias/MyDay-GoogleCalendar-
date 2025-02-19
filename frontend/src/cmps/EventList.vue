<template>
    <div>
        <ul>
            <li class="event-prev" v-for="event in events" key="event.id">
                <EventPreview :event="event"></EventPreview>
            </li>
        </ul>
    </div>
</template>

<script>
import EventPreview from './EventPreview.vue';

export default {
    props: ['events'],
    components: {
            EventPreview,
        }
    }
</script>

<style>
.event-prev {
      list-style: none;
      text-align: center;

}
</style>