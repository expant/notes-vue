<template>
  <div class="notes flex w-full sm:w-[300px] justify-between gap-[50px] sm:gap-[100px] rounded-[10px]">
    <div class="notes_flex w-full">
      <div class="flex justify-between items-center">
        <div class="notes__count text-xl sm:text-3xl font-extrabold text-sky-600">{{ getNotes.length }}</div>
        <button 
          class="relative"
          @click="controlMenu.active = !controlMenu.active"
        >
          <AppThreeDots :isActive="controlMenu.active"/>
          <transition name="appearance">
            <AppControlMenu v-show="controlMenu.active" />
          </transition>
        </button>
      </div>
      <ul class="notes-list flex flex-col gap-2.5 mt-2.5 sm:mt-5">
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