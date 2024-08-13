<template>
  <div class="completed-notes notes">
    <div class="completed-notes__count notes-count">Завершённые: {{ notes.length }}</div>
    <ul class="completed-notes__list notes-list">
      <completed-notes-item
        v-for="note in notes"
        :key="note.id"
        :title="note.title"
        :description="note.description"
        :id="note.id"
        @remove-note="removeNote"
        @click="showModal(note.id)" 
      ></completed-notes-item>
    </ul>
  </div>
</template>

<script>
import CompletedNotesItem from './CompletedNotesItem.vue';

export default {
  emits: ['remove-note', 'return-to-active'],
  props: {
    notes: Object,
  },
  components: {
    CompletedNotesItem,
  }
}
</script>

<style scoped>
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
}

.completed-note {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
  list-style-type: none;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  transition: all ease-in 0.1s;
}

.completed-note:hover {
  background: #eeeeee;
}

.completed-note__title,
.completed-note__return,
.completed-note__remove {
  padding: 10px;
}

.completed-note__return,
.completed-note__remove  {
  background: #eeeeee;
}

.completed-note__title {
  flex: 0 0 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: auto;
}

.completed-note__return,
.completed-note__remove {
  transition: background ease-out 0.1s;
}

.completed-note__remove {
  border-radius: 0 5px 5px 0;
}

.completed-note__return:hover {
  cursor: pointer;
  background: #9ACD32;
}

.completed-note__remove:hover {
  cursor: pointer;
  background: #FF0000;
}

</style>