<template>
  <li 
    class="flex justify-between w-full rounded bg-gradient-to-r  from-black from-0% via-sky-600 via-0% to-[#eeeeee] to-80%  translate-x-0 opacity-0 hover:translate-x-[-5px] transition-all animate-show-note" 
    v-if="type === 'added'"
  >
    <span class="inline-block font-normal text-base whitespace-nowrap overflow-hidden text-ellipsis w-[85%] sm:w-[230px] p-2.5 sm:p-[15px] text-white" @click="$emit('show-content')">{{ title }}</span>
    <div class="relative flex justify-center items-center w-[50px] bg-[#eeeeee] rounded cursor-pointer transition-transform" @click="$emit('remove-note')">
      <span class="absolute w-[25px] h-px bg-black -rotate-45"></span>
      <span class="absolute w-[25px] h-px bg-black rotate-45"></span>
    </div>
  </li>
  <li class="w-full rounded p-2.5 sm:p-[15px] text-white bg-sky-600 sm:text-sky-600 hover:text-white sm:bg-white hover:bg-sky-600 border border-solid border-sky-600 transition-all" v-if="type === 'new'">
    <span class="p-2.5 sm:p-[15px]">Добавить заметку</span>
  </li>
</template>

<script setup>
const emits = defineEmits([
  'remove-note', 
  'show-modal',
  'show-content',
  'hide-content',
]);
const props = defineProps({
  title: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  }
});
</script>

<style scoped>
</style>