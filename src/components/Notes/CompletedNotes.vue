<template>
  <div class="completed-notes notes">
    <div class="completed-notes__count notes-count">Завершённые:</div>
    <ul class="completed-notes__list notes-list">
      <!-- <note-item 
        v-for="note in notes.active"
        :key="note.id"
        :title="note.title"
        :description="note.description"
        :id="note.id"
        @remove-note="removeNote"
        @click="showModal(note.id)"
      ></note-item>
      <note-item 
        class="preparatory-note"
        v-if="addNoteForm.title.field.trim()"
        :title="addNoteForm.title.field"
      ></note-item> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    
  }
}
</script>

<style scoped>

</style>