<template>
  <li 
    class="notes-item note animation flex justify-between bg-gradient-to-r from-black from-0% via-sky-600 via-0% to-[#eeeeee] to-80%  translate-x-0 hover:translate-x-[-5px] transition-all" 
    v-if="type === 'added'"
  >
    <span class="inline-block font-normal text-base whitespace-nowrap overflow-hidden text-ellipsis text-white w-[85%] sm:w-[230px] p-2.5 sm:p-[15px] text-white" @click="$emit('show-content')">{{ title }}</span>
    <div class="remove-note relative flex justify-center items-center w-[50px] bg-[#eeeeee] rounded cursor-pointer transition-transform" @click="$emit('remove-note')"></div>
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
.note {
  width: 100%;
  border-radius: 5px;
}

.title {
  padding: 15px;
}

.animation {
  opacity: 0;
  transition: 0.5s;
  animation: show-note 0.5s 1;
  animation-fill-mode: forwards;
  animation-delay: 0s;
}

@keyframes show-note {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.remove-note {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  background: #eee;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: transform ease-in 0.1s;
}

.remove-note::after,
.remove-note::before {
  content: '';
  position: absolute;
  width: 25px;
  height: 1px;
  background: #333;
}

.remove-note::after {
  transform: rotate(45deg);
}

.remove-note::before {
  transform: rotate(-45deg);
}

</style>