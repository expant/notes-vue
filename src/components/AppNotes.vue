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
          <transition name="appearance">
            <AppControlMenu v-show="controlMenu.active" />
          </transition>
        </button>
      </div>
      <ul class="notes-list">
        <app-notes-item
          v-for="note in getNotes"
          :key="note.id"
          :title="note.title"
          type="added"
          @show-content="showNoteContent(note.id)"
          @remove-note="notesStore.removeNote(note.id)"
        ></app-notes-item>
        <button class="notes-new" @click="handleNewNote">
          <app-notes-item type="new"></app-notes-item>
        </button>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/store';
import { storeToRefs } from 'pinia';
import AppNotesItem from './AppNotesItem.vue';
import AppThreeDots from './AppThreeDots.vue';
import AppControlMenu from './AppControlMenu.vue';

const notesStore = useNotesStore();
const { getNotes, currentNote, controlMenu } = storeToRefs(notesStore);

const handleNewNote = () => {
  notesStore.form.isVisible = true;
  notesStore.controlMenu.active = false;
};

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

.appearance-enter-active,
.appearance-leave-active {
  transition: all 0.2s ease;
}

.appearance-enter-from,
.appearance-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

.appearance-enter-to,
.appearance-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>