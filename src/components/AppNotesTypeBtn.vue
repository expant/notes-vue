<template>
  <button
    v-if="btnType === 'available'"
    :class="['inline-block p-1.5 sm:p-2.5 text-white bg-[#80CBC4] rounded cursor-pointer transition-all', currentType === notesType ? 'current' : '']"
    @click="$emit('switch-type', notesType)"
  >
    {{ notesType }}
  </button>
  <button 
    v-if="btnType === 'new'"
    :class="['new notes-count', types.isFormVisible ? 'active' : 'hidden']"
    @click="handleNewBtn"
  ></button>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useNotesStore } from '@/store';

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
/* .notes-count {
  display: inline-block;
  padding: 10px;
  color: #fff;
  background: #80CBC4;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease-in-out 0.1s;
} */

.notes-count:hover {
  color: #333;
  background: #9ACD32;
}

.current {
  color: #333;
  background: #9ACD32;
}

.new.notes-count {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px 20px;
  background: #fff;
  border: 1px solid #80CBC4;
}

.new.notes-count::before,
.new.notes-count::after {
  content: '';
  position: absolute;
  width: 15px;
  height: 1px;
  background: #80CBC4;
}

.new.notes-count:hover {
  background: #80CBC4;
}

.new.notes-count:hover::before,
.new.notes-count:hover::after {
  background: #ffffff;
}

.hidden.notes-count::before {
  transform: rotate(90deg);
}

.active.notes-count::before {
  transform: rotate(-45deg);
}
.active.notes-count::after {
  transform: rotate(45deg);
}

.active.notes-count::before,
.hidden.notes-count::before,
.active.notes-count::after,
.hidden.notes-count::after {
  transition: transform ease-in-out 0.2s;
}

/* .completed-notes__count {
  color: #fff;
  background: #80CBC4;
} */
</style>