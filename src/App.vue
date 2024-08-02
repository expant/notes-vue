<template>
  <h1>Список заметок</h1>
  <form 
    class="creating-notes-form"
    action="#" 
    @submit.prevent="addNewNote"
  >
    <input 
      class="add-note-input"
      type="text" 
      placeholder="Добавить заметку"
      v-model="inputValue"
    >
    <button class="add-note-btn" role="button">Добавить</button>
  </form> 
  <div class="notes-not-empty" v-if="notes.length !== 0">
    <div class="notes-count">Кол-во заметок: {{ notes.length }}</div>
    <ul class="notes">
      <NoteItem
        v-for="note in notes"
        :key="note.id"
        :title="note.title"
        :id="note.id"
        :is-editing="note.isEditing"
        @remove-note="removeNote"
        @activate-editing="activateEditing"
        @edit-note="editNote"
      />
    </ul>
  </div>
  <div class="notes-empty" v-else>Заметок нет</div>
</template>

<script>
import NoteItem from './components/NoteItem.vue';

export default {
  data() {
    return {
      inputValue: '',
      notes: [],
      firstId: 0,
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      if (!this.inputValue.trim()) {
        return;
      }
      this.notes.push({
        title: this.inputValue,
        id: this.firstId,
        isEditing: false,
      });
      this.inputValue = '';
      this.firstId += 1;
    },
    removeNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    activateEditing(id) {
      this.notes = this.notes.map((note) => {
        if (note.id !== id) return note;
        return { ...note, isEditing: true };
      });
    },
    editNote(id, title) {
      this.notes = this.notes.map((note) => {
        if (note.id !== id) return note;
        if (!title) return { ...note, isEditing: false };
        return { id, title, isEditing: false };
      });
    }
  },
  components: {
    NoteItem
  }
};
</script>

<style scoped>
.creating-notes-form {
  margin: 30px 0;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

.add-note-input {
  font-size: 16px;
  flex: 0 1 315px;
  padding: 5px 5px;
  border: 0;
  border-bottom: 1px solid #fa6400;
}

.add-note-input:focus {
  outline: 0;
}

.add-note-btn {
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.add-note-btn:hover,
.add-note-btn:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.add-note-btn:hover {
  transform: translateY(-1px);
}

.notes-count {
  margin-bottom: 10px;
  color: #4DB6AC;
}

.notes {
  list-style-type: none;
}

.notes li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 1px solid #fb8332;
  border-radius: 5px;
}

.notes-empty {
  color: #4DB6AC;
}

</style>
