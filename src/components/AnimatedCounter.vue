<template>
  <span>{{ total_str }}</span>
</template>

<script setup>
import { computed } from "@vue/runtime-core";

// defineProps(["total"]);
const props = defineProps({
  total: {
    type: String,
    default: "10",
  },
});

const total_str = computed(() => {
  return parseInt(props.total).toLocaleString("en-US");
});
</script>
