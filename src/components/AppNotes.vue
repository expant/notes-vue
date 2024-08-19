<template>
  <div class="notes-type-btns">
    <app-notes-type-btn
      notesType="active"
      :currentType="currentType"
      @switch-type="currentType = 'active'"
    ></app-notes-type-btn>
    <app-notes-type-btn
      notes-type="completed"
      :currentType="currentType"
      @switch-type="currentType = 'completed'"
    >
    </app-notes-type-btn>
  </div>
  <div>{{ searched }}</div>
  <div :class="`${currentType}-notes notes`">
    <ul :class="`${currentType}-notes__list notes-list`">
      <app-notes-item
        v-for="note in isSearched()"
        :key="note.id"
        :title="note.title"
        :notesType="currentType"
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
import { computed, ref } from 'vue';
import { useNotesStore } from '@/store';
import { storeToRefs } from 'pinia';
import AppNotesItem from './AppNotesItem.vue';
import AppNotesTypeBtn from './AppNotesTypeBtn.vue';

const notesStore = useNotesStore();
const { 
  getNotesByType, 
  currentType, 
  getSearchNotes,
  searched,
} = storeToRefs(notesStore);

const isSearched = () => computed(() => {
  if (!searched.value) {
    return getNotesByType(currentType);
  }
  return getSearchNotes();
});
</script>

<style scoped>
.notes-type-btns {
  display: flex;
  gap: 10px;
}

.notes {
  flex: 0 0 370px;
  display: inline-block;
  margin-top: 30px;
  padding: 0 30px 0 30px;
  border-radius: 10px;
}

.active-notes {
  background: #ffffff;
}

.notes-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  list-style-type: none;
}
</style>