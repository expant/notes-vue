<template>
  <div 
    :class="[
      isActive ? 'bg-[#eee]' : '', 
      'flex gap-[3px] py-4 px-2.5 rounded-full transition-all hover:bg-[#eee]'
    ]"
  >
    <span class="w-[3px] h-[3px] bg-sky-600 rounded-full"></span>
    <span class="w-[3px] h-[3px] bg-sky-600 rounded-full"></span>
    <span class="w-[3px] h-[3px] bg-sky-600 rounded-full"></span>
  </div>
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    required: true,
  }
});
</script>

<style scoped>
</style>