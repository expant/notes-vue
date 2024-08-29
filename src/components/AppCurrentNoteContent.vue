<template>
  <div class="current-note content">
    <h2 class="current-note__title">{{ note.title }}</h2>
    <p class="current-note__description">{{ note.description }}</p>
    <div class="current-note__btns">
      <button 
        class="remove" 
        @click="notesStore.removeNote(noteId)"
      >Удалить</button>
    </div>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/store';
import { computed } from 'vue';

const notesStore = useNotesStore()

const props = defineProps({ 
  noteId: {
    require: true,
  }
});

const note = computed(() => notesStore.getNoteByProp('id', props.noteId));
</script>

<style scoped>
.current-note {
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  min-height: 400px;
  padding: 30px;
  background: #eee;
  border-radius: 5px;
  color: #333;
}

.current-note__title,
.current-note__description {
  word-break: break-all;
}

.current-note__description {
  margin: 20px 0;
}

.current-note__btns {
  justify-self: flex-end;
  align-self: flex-end;
  margin-top: auto;
}

.current-note__btns .remove {
  font-weight: 400;
  font-size: 18px;
  padding: 12px 17px;
  background: #eee;
  border: 1px solid #1000ff;
  border-radius: 5px;
  color: #1000ff;
  transition: all 0.1s ease;
}

.current-note__btns .remove:hover {
  background: #1000ff;
  color: #ffffff;
}
</style>