<template>
  <button 
    :class="`${currentType === notesType ? 'current' : ''} notes-count`"
    @click="$emit('switch-type', notesType)"
  >
    {{ textType }}: {{ getCountByType }}
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useNotesStore } from '@/store';

const notesStore = useNotesStore();
const { notes } = storeToRefs(notesStore);

const props = defineProps({
  notesType: {
    type: String,
    default: 'active',
    validator(value) {
      return ['active', 'completed'].includes(value);
    },
  },
  currentType: {
    type: String,
    required: true,
  },
});

const getCountByType = computed(() => {
  if (notes.length === 0) {
    return 0;
  }
  const { notesType } = props;
  return notes.value.filter((el) => el.type === notesType).length;
});

const textType = computed(() => {
  const { notesType } = props;
  return notesType === 'active' ? 'Активные' : 'Завершённые';
});
</script>

<style scoped>
.notes-count {
  display: inline-block;
  padding: 10px;
  color: #fff;
  background: #80CBC4;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease-in-out 0.1s;
}

.notes-count:hover {
  color: #333;
  background: #9ACD32;
}

/* .active-notes__count {
  color: #333;
  background: #9ACD32;
} */

.current {
  color: #333;
  background: #9ACD32;
}

/* .completed-notes__count {
  color: #fff;
  background: #80CBC4;
} */
</style>