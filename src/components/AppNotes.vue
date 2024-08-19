<template>
  <div :class="`${notesType}-notes notes`">
    <div :class="`${notesType}-notes__count notes-count`">
      {{ textType }}: {{ getCountByType }}
    </div>
    <ul :class="`${notesType}-notes__list notes-list`">
      <app-notes-item
        v-for="note in getNotesByType(notesType)"
        :key="note.id"
        :title="note.title"
        :notesType="notesType"
        @show-modal="notesStore.defineModal(note.id)"
        @remove-note="notesStore.removeNote(note.id)"
        @change-note-type="notesStore.changeNoteType(note.id, 'active')"
      ></app-notes-item>
      <!-- <app-notes-item 
        :title="notesStore.addNoteForm.title"
        v-if="(notesType === 'active') && notesStore.addNoteForm.title"
      >
      </app-notes-item> -->
    </ul>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useNotesStore } from '@/store';
import { storeToRefs } from 'pinia';
import AppNotesItem from './AppNotesItem.vue';

const notesStore = useNotesStore();
const { notes, getNotesByType } = storeToRefs(notesStore);

const props = defineProps({
  notesType: {
    type: String,
    default: 'active',
    validator(value) {
      return ['active', 'completed'].includes(value);
    },
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
.notes {
  flex: 0 0 370px;
  padding: 30px;
  border-radius: 10px;
}

.notes-count {
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
}

.active-notes {
  background: #ffffff;
}

.active-notes__count {
  color: #333;
  background: #9ACD32;
}

.completed-notes__count {
  color: #fff;
  background: #80CBC4;
}

.completed-notes {
  background-color: #FFFAFA;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
}

.notes-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  list-style-type: none;
}
</style>