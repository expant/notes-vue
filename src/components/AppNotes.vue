<template>
  <div class="notes">
    <div class="notes_flex">
      <div class="notes__wrap">
        <div class="notes__count">{{ getNotes.length }}</div>
        <button 
          class="notes__control"
          @click="controlMenu.active = !controlMenu.active"
        >
          <AppThreeDots :class="controlMenu.active ? 'active' : ''"/>
          <AppControlMenu v-show="controlMenu.active" />
        </button>
      </div>
      <ul class="notes-list">
        <app-notes-item
          v-for="note in getNotes"
          :key="note.id"
          :title="note.title"
          type="added"
          @show-modal="notesStore.defineModal(note.id)"
          @remove-note="notesStore.removeNote(note.id)"
          @show-content="showNoteContent(note.id)"
        ></app-notes-item>
        <button class="notes-new">
          <app-notes-item type="new"></app-notes-item>
        </button>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useNotesStore } from '@/store';
import { storeToRefs } from 'pinia';
import AppNotesItem from './AppNotesItem.vue';
import AppThreeDots from './AppThreeDots.vue';
import AppControlMenu from './AppControlMenu.vue';

const notesStore = useNotesStore();
const { getNotes, currentNote } = storeToRefs(notesStore);

const controlMenu = reactive({ active: false });

const showNoteContent = (id) => {
  notesStore.currentNote.active = true;
  notesStore.currentNote.id = id;
}
</script>

<style scoped>
.notes {
  width: 300px;
  display: flex;
  justify-content: space-between;
  gap: 100px;
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

.notes__count {
  font-size: 30px;
  font-weight: 800;
  color: #968ff5;
}

.notes__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notes__control {
  position: relative;
}

.notes__control .active {
  background: #eee;
}

.notes_flex {
  flex-shrink: 0;
  width: 100%;
}

</style>