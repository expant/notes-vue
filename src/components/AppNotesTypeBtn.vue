<template>
  <button
    v-if="btnType === 'available'"
    :class="['inline-block p-1.5 sm:p-2.5 bg-[#80CBC4] rounded cursor-pointer transition-all', currentType === notesType ? 'text-black bg-[#9ACD32]' : 'text-white']"
    @click="$emit('switch-type', notesType)"
  >
    {{ notesType }}
  </button>
  <button 
    v-if="btnType === 'new'"
    class="relative flex items-center justify-center h-full py-2.5 px-5 bg-white border border-solid border-[#80CBC4] hover:bg-[#80CBC4] group"
    @click="handleNewBtn"
  >
    <span :class="['absolute w-[15px] h-px bg-[#80CBC4] group-hover:bg-white transition-transform', types.isFormVisible ? '-rotate-45' : 'rotate-90']"></span>
    <span :class="['absolute w-[15px] h-px bg-[#80CBC4] group-hover:bg-white transition-transform', types.isFormVisible ? 'rotate-45' : '']"></span>
  </button>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useNotesStore } from '@/stores/store';

const notesStore = useNotesStore();
const { types } = storeToRefs(notesStore);

const emits = defineEmits(['switch-type', 'clear-err-message']);
const props = defineProps({
  notesType: {
    type: String,
    default: 'Активные',
  },
  currentType: {
    type: String,
  },
  btnType: {
    type: String,
    required: true,
  },
});

const handleNewBtn = () => {
  types.value.isFormVisible = !types.value.isFormVisible;
  if (!types.isFormVisible) {
    emits('clear-err-message');
  }
}
</script>

<style scoped>
</style>