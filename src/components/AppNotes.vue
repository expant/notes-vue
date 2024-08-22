<template>
  <div class="notes-type-btns">
    <app-notes-type-btn
      v-for="type in types.all"
      :key="type"
      :notesType="type"
      :currentType="types.current"
      btnType="available"
      @switch-type="types.current = type"
    ></app-notes-type-btn>
    <div class="notes-type-btns__new">
      <app-notes-type-btn btnType="new"></app-notes-type-btn>
      <transition name="fade">
        <input
          type="text"
          name="new-type"
          id="new-type"
          placeholder="Название типа"
          :class="types.isFormVisible ? 'active' : 'hidden'"
          v-if="types.isFormVisible"
          @change="handleNewType($event)"
        >
      </transition>
    </div>
  </div>
  <div :class="`${types.current}-notes notes`">
    <ul :class="`${types.current}-notes__list notes-list`">
      <app-notes-item 
        v-for="note in getSearchNotes"
        :key="note.id"
        :title="note.title"
        @show-modal="notesStore.defineModal(note.id)"
        @remove-note="notesStore.removeNote(note.id)"
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
import { ref } from 'vue';
import { useNotesStore } from '@/store';
import { storeToRefs } from 'pinia';
import AppNotesItem from './AppNotesItem.vue';
import AppNotesTypeBtn from './AppNotesTypeBtn.vue';

const notesStore = useNotesStore();
const { types, getSearchNotes } = storeToRefs(notesStore);
const newTypeName = ref('');

const handleNewType = (event) => {
  notesStore.addNotesType(event.target.value);
  event.target.value = '';
};
</script>

<style scoped>
.notes-type-btns {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}

.notes-type-btns__new {
  display: flex;
  gap: 5px;
}

.notes-type-btns__new input {
  padding: 5px 10px;
  border: 1px solid #80CBC4;
  color: #333;
  transition: 0.2s;
  animation: show-new-type-input 0.2s 1;
  animation-fill-mode: forwards;
  animation-delay: 0s;

}

@keyframes show-new-type-input {
  0% {
    opacity: 0;
    width: 0;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
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