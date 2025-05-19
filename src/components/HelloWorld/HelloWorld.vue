<template>
  <h1> {{ msg }} </h1>
  <button
    type="button"
    @click="increment"
  >
    Click Me
  </button>
  <p> Clicked {{ count }} times </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  // Line
  msg: string
}

defineProps<Props>();

const count = ref(0);

const increment = () => {
  count.value = count.value + 1;
};
</script>
