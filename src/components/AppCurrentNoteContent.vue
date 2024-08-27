<template>
  <div class="current-note content">
    <h2 class="current-note__title">{{ note.title }}</h2>
    <p class="current-note__description">{{ note.description }}</p>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/store';

const notesStore = useNotesStore()

const props = defineProps({ 
  noteId: {
    require: true,
  }
})

const note = notesStore.getNoteById(props.noteId);
</script>

<style scoped>
.current-note {
  flex: 0 1 500px;
  max-width: 600px;
  padding: 30px;
  background: linear-gradient(
    135deg, rgba(2,0,36,1) 0%, 
    rgba(16,0,255,1) 0%, 
    rgba(238,238,238,1) 80%);
  border-radius: 5px;
  color: #ffffff;
}
</style>