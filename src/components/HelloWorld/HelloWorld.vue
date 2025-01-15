<template lang="pug">
h1 {{ msg }}
button(@click="increment") Click Me
p Clicked {{ count }} times
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  msg: string
}

defineProps<Props>();

const count = ref(0);

const increment = () => {
  count.value = count.value + 1;
};
</script>
