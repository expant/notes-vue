<template>
  <div :class="`${notesType}-notes notes`">
    <div :class="`${notesType}-notes__count notes-count`">
      {{ textType }}: {{ notes[notesType].length }}
    </div>
    <ul :class="`${notesType}-notes__list notes-list`">
      <app-notes-item
        v-for="note in notes.active"
        :key="note.id"
        :title="note.title"
        :notesType="notesType"
      ></app-notes-item>
      <app-notes-item v-if="addNoteForm.title.length > 0"
      >{{ addNoteForm.title }}</app-notes-item>
      <!-- <note-item 
        v-for="note in notes.active"
        :key="note.id"
        :title="note.title"
        :description="note.description"
        :id="note.id"
        type="active"
        @show-modal="showModal"
        @remove-note="removeNote"
      ></note-item> -->
      <!-- <note-item 
        v-if="addNoteForm.title.field.trim()"
        :title="addNoteForm.title.field"
        type="preparatory"
      ></note-item> -->
    </ul>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useNotesStore } from '@/store';
import { storeToRefs } from 'pinia';
// import AppNotesItem from './AppNotesItem.vue';

const notesStore = useNotesStore();
const { notes, addNoteForm } = storeToRefs(notesStore);

const props = defineProps({
  notesType: {
    type: String,
    default: 'active',
    validator(value) {
      return ['active', 'completed'].includes(value);
    },
  },
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

.active-notes {
  background: #ffffff;
}

.active-notes__count {
  color: #455A64;
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
  margin-top: 30px;
  list-style-type: none;
}
</style>