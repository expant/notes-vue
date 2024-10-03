<template>
  <svg 
    class="fill-transparent stroke-2" 
    :width="`${iconWidth}px`"
    :height="`${iconHeight}`"
    :stroke="strokeColor"
  >
    <use :xlink:href="`${icons}#${iconName}`"></use>
  </svg>
</template>

<script setup>
import icons from '@/assets/icons.svg';

defineProps({
  iconName: String,
  iconWidth: Number,
  iconHeight: Number,
  strokeColor: String,
});
</script>

<style scoped>
</style>