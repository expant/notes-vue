<template>
  <svg 
    class="fill-transparent stroke-2" 
    :width="`${iconWidth}px`"
    :height="`${iconHeight}`"
    :stroke="strokeColor"
    viewBox="0 0 24 24"
  >
    <g>
      <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>
</template>

<script setup>
defineProps({
  iconName: String,
  iconWidth: Number,
  iconHeight: Number,
  strokeColor: String,
});
</script>

<style scoped>
</style>