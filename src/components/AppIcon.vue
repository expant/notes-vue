<template>
  <svg 
    class="icon" 
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
.icon {
  fill: transparent;
  stroke-width: 2;
}
</style>