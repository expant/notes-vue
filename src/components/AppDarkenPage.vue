<template>
  <div class="darken-page">
    <slot />
  </div>
</template>

<script setup>
</script>

<style scoped>
.darken-page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(51, 51, 51, 0.7);
  z-index: 1;
}
</style>